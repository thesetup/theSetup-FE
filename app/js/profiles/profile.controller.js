;(function (){

  'use strict';

  angular.module('Profile')

  .controller('ProfileController', ['$scope', '$state', 'ProfileService', 'UserService', 'SearchService', '$stateParams', function ($scope, $state, ProfileService, UserService, SearchService, $stateParams) {

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

    SearchService.goSearch().success( function (data) {
      console.log($stateParams.id);
      var singleID = $stateParams.id;
      $scope.result = _.findWhere(data, {id: singleID});
      console.log($scope.result);
    });


  }]);

}());
