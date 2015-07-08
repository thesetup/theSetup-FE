;(function (){

  'use strict';

  angular.module('Profile')

  .controller('ProfileController', ['$scope', '$state', 'ProfileService', function ($scope, $state, ProfileService) {

    $scope.gotoHome = function () {
      $state.go('home');
    };

    $scope.gotoSearch = function (){
      $state.go('search');
    };

    $scope.gotoCreate = function () {
      $state.go('createprofile');
    };

    $scope.logoutUser = function () {
      UserService.logout();
    };


  }]);

}());
