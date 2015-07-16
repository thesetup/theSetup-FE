;(function (){

  'use strict';

  angular.module('Profile')

  .service('ProfileService', ['API', '$cookies', '$rootScope','$state', '$http', function (API, $cookies, $rootScope, $state, $http) {

    var Profile = function (options) {
      this.username = options.username;
      this.email = options.email;
      this.password = options.password;
      this.gender = options.gender;
      this.occupation = options.occupation;
      this.orientation = options.orientation;
      this.location = options.location;
      this.birthyear = options.birthyear;
    };

    var _profileSuccess = function (data) {
      $cookies.put('currentprofileID', data.profile_id);
    };

    var _imageSuccess = function () {
      $cookies.remove('currentprofileID');
    };

    this.profileCreation = function (profile) {
      var p = new Profile(profile);
      var url = API.URL + '/profiles';
      $http({
        method: 'POST',
        url: url,
        headers: API.CONFIG.headers,
        params: p
      })
      .success( function (data) {
        console.log(data);
        _profileSuccess(data);
      });
    };


    this.getSingleProfile = function (profile) {
      $http.get({
        method: 'GET',
        url: API.URL + '/profiles/:id',
        headers: API.CONFIG.headers,
        params: profile
      })
      .success (function (data) {
        $state.reload();
      });
    };


    this.imageUpload = function () {
      var mainPic = document.getElementById('mainPhoto').files[0];


      var headers = {
        'Content-Type' : undefined
      };
      var formData = new FormData();
      formData.append('file[image]', mainPic);

      console.log(formData);

      $http({
        method: 'POST',
        url: API.URL + '/profiles',
        data: formData,
        headers: headers

      });
    };




  }]);

}());
