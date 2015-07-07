;(function (){

  'use strict';

  angular.module('User')

  .controller('UserController', ['$scope', '$state', '$location', 'UserService', function ($scope, $state, $location, UserService) {


    $scope.registerUser =  function (user) {
      UserService.userRegister(user);
    };

    $scope.loginUser = function (user) {
      UserService.userLogin(user);
    };


  }]);

}());
