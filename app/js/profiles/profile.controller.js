;(function (){

  'use strict';

  angular.module('Profile')

  .controller('ProfileController', ['$cookies', '$scope', '$state', 'ProfileService', 'UserService', 'SearchService', '$stateParams', '$sce', function ($cookies, $scope, $state, ProfileService, UserService, SearchService, $stateParams, $sce) {

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    $scope.user = $cookies.getObject('currentUser');

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
      var singleID = Number($stateParams.id);
      var result = _.findWhere(data.questions, {profile_id: singleID});
      var vids = _.find(data.videos, {videoable_id: singleID});

      $scope.result = result;
      $scope.vids = vids;

      var currYear = new Date().getFullYear();
      $scope.result.age = currYear - result.birthyear;



    });

    $scope.uploadVideo = function (profile) {
      ProfileService.submitVideo(profile);
    };


  }]);

}());
