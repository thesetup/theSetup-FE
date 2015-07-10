;(function (){

  'use strict';

  angular.module('Profile')

  .controller('ProfileController', ['$scope', '$state', 'ProfileService', function ($scope, $state, ProfileService) {

    $scope.createProfile = function (profile) {
      ProfileService.profileCreation(profile);
    };

    $scope.showSingle = function (profile) {
      ProfileService.getSingleProfile(profile);
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

    $scope.logoutUser = function () {
      UserService.logout();
    };


  }]);

}());
