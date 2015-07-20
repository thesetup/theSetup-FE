;(function (){

  'use strict';

  angular.module('Profile')

  .controller('SingleProfileController', ['$cookies', '$scope', '$state', 'ProfileService', 'UserService', 'SearchService', '$stateParams', '$sce', function ($cookies, $scope, $state, ProfileService, UserService, SearchService, $stateParams, $sce) {

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

    $scope.uploadVideo = function (profile) {
      ProfileService.submitVideo(profile);
    };

    ProfileService.getSingleProfile($stateParams.id).then(function (data) {
        var questions = data.data.question;
        $scope.questions = questions;

        var createdBy = data.data.profiles;
        var videos = data.data.videos;
        console.log(videos);
        _.each(videos, function(video) {
          console.log(video);
          var prof_video = video.video_url;
          var thumb_video = video.thumbnail_url;
          $scope.prof_video = $sce.trustAsResourceUrl(prof_video);
        });

    ProfileService.getCreator(createdBy.profiler_id).then(function(data) {
        var creator = data.data.username;
        $scope.creator = creator;


    var currYear = new Date().getFullYear();
        $scope.questions.age = (currYear - questions.birthyear);


    });
    });


  }]);

}());
