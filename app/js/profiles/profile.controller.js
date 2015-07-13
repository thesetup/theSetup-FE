;(function (){

  'use strict';

  angular.module('Profile')

  .controller('ProfileController', ['$scope', '$state', 'ProfileService', 'UserService', function ($scope, $state, ProfileService, UserService) {

   $scope.uploadImages = function () {
    ProfileService.imageUpload();
   };

    $scope.createProfile = function (profile) {
      console.log('inside controller!');
      ProfileService.profileCreation(profile);
    };

    $scope.showSingle = function (profile) {
      ProfileService.getSingleProfile(profile);
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
