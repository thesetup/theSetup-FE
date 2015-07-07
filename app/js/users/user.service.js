;(function (){

  'use strict';


  angular.module('User')

  .service('UserService', ['API','$rootScope','$http', '$cookies', '$location', '$state',  function (API, $rootScope, $http, $cookies, $location, $state) {


    var User = function (options) {
      this.email = options.email;
      this.password = options.password;
    };

    var _updateConfig = function (user) {
      API.CONFIG.headers['Access-Token'] = user.access_token;
      $state.go('home.loggedin');
    };


    var _successLog = function (data) {
      $cookies.put('access_token', data.access_token);
      $cookies.putObject('currentUser', data);
      $location.path('/');
      };

    this.userLogIn = function (user) {
      $http({
        method: 'POST',
        url: API.URL + '/login',
        headers: API.CONFIG.headers,
        params: user
      }).success( function (data) {
        _successLog(data);
      });
    };

    this.userRegister = function (user) {
      var x = new User(user);
      $http.post(API.URL + '/users/register', x)
      .success( function (data) {
        _successLog(data);
      });

    };


    this.checkStatus = function () {
      var user = $cookies.get('access_token');
      console.log(user);
      if(user !== undefined) {
        _updateConfig(user);
      } else {
        $state.go('home.public');
      }
    };


  }]);

}());
