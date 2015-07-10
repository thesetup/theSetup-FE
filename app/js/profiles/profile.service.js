;(function (){

  'use strict';

  angular.module('Profile')

  .service('ProfileService', ['API', '$rootScope','$state', '$http', function (API, $rootScope, $state, $http) {

    var Profile = function (options) {
      this.first_name = options.first_name;
      this.email = options.email;
      this.gender = options.gender;
      this.occupation = options.occupation;
      this.orientation = options.orientation;
      this.location = options.location;
      this.birthYear = options.birthYear;
      this.mainPic = options.mainPic;
      this.optional_pic1 = options.optional_pic1;
      this.optional_pic2 = options.optional_pic2;
      this.optional_pic3 = options.optional_pic3;
      this.optional_pic4 = options.optional_pic4;
      this.optional_pic5 = options.optional_pic5;
      this.mainVid = options.mainVid;
      this.hobbies_vid = options.hobbies_vid;
      this.tastes_vid = options.tastes_vid;
      this.looking_for_vid = options.looking_for_vid;
    };

    var _profileSuccess = function (data) {
      $state.go('singleprofile');
    };

    this.profileCreation = function (profile) {
      var p = new Profile(profile);
      $http.post({
        method: 'POST',
        url: API.URL + '/profiles',
        headers: API.CONFIG.headers,
        params: p
      })
      .success( function (data) {
        _profileSuccess(data);
      });
    };


    this.getSingleProfile = function (profile) {
      $http.get({
        method: 'GET',
        url: API.URL + '/profiles/:profile_id',
        headers: API.CONFIG.headers,
        params: profile
      })
      .success (function (data) {
        $state.reload();
      });
    };

  }]);

}());
