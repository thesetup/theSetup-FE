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
        var avatar = data.data.avatar_url;
        $scope.avatar = avatar;

        var createdBy = data.data.profiles;
        var videos = data.data.videos;
        _.each(videos, function(video) {
          console.log(video);
          if (video.video_type == "main_video") {
            var prof_video = video.video_url;
            var main_caption = video.caption;
            $scope.prof_video = $sce.trustAsResourceUrl(prof_video);
            $scope.main_caption = main_caption;
          }
          if (video.video_type == "optional_video_1") {
            var opt1_video = video.video_url;
            var opt1_caption = video.caption;
            $scope.opt1_video = $sce.trustAsResourceUrl(opt1_video);
            $scope.opt1_caption = opt1_caption;
          }
          if (video.video_type == "optional_video_2") {
            var opt2_video = video.video_url;
            var opt2_caption = video.caption;
            $scope.opt2_video = $sce.trustAsResourceUrl(opt2_video);
            $scope.opt2_caption = opt2_caption;
          }
          if (video.video_type == "optional_video_3") {
            var opt3_video = video.video_url;
            var opt3_caption = video.caption;
            $scope.opt3_video = $sce.trustAsResourceUrl(opt3_video);
            $scope.opt3_caption = opt3_caption;
          }
          var thumb_video = video.thumbnail_url;
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
