;(function (){

  'use strict';

  angular.module('User')

  .controller('UserController', ['$rootScope', '$scope', '$cookies', '$state','UserService', function ($rootScope, $scope, $cookies, $state,UserService) {

    var user = $cookies.getObject('currentUser');
    console.log(user);
    console.log(user.username);


    $scope.registerUser =  function (user) {
      UserService.userRegister(user);
    };

    $scope.loginUser = function (user) {
      UserService.userLogIn(user);
    };

    $scope.logoutUser = function () {
      UserService.logout();
    };

    $scope.gotoLogin = function () {
      $state.go('login');
    };

    $scope.gotoHome = function () {
      $state.go('home');
    };

    $scope.gotoSearch = function (){
      $state.go('search');
    };

    $scope.gotoCreate = function () {
      $state.go('createprofile');
    };

  }]);

}());
