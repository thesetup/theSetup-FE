;(function (){

  'use strict';


  angular.module('User')

  .service('UserService', ['API','$rootScope','$http', '$cookies','$state',  function (API, $rootScope, $http, $cookies, $state) {


    var User = function (options) {
      this.email = options.email;
      this.password = options.password;
    };

    var _updateConfig = function (user) {
      API.CONFIG.headers['Access-Token'] = user.access_token;
      $state.go('home');
    };


    var _successLog = function (data) {
      $cookies.put('access_token', data.access_token);
      $cookies.putObject('currentUser', data);
      _updateConfig(data);
      $state.go('home');
      };

    var _successLogout = function () {
      $cookies.remove('access_token');
      $cookies.remove('currentUser');
      API.CONFIG.headers['Access-Token'] = '';
      $state.reload();
    };

    this.userLogIn = function (user) {
      $http({
        method: 'POST',
        url: API.URL + '/users/login',
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
      console.log('in checkStatus');
      var user = $cookies.get('access_token') !== undefined;
      if(user) {
        console.log('in if statement');
        $state.go('home');
      }
    };

    this.isLoggedIn = function () {
      var user = $cookies.get('access_token');
      console.log('in isLoggedIn function!!!');
      return (user !== undefined) ? true : false;
    };

    this.checkLogin = function () {
      var user = $cookies.get('access_token') !== undefined;
      if (!user && !$state.includes('login')) {
        $state.go('home');
      }
    };

    this.logout = function () {
      _successLogout();
    };


  }]);

}());
