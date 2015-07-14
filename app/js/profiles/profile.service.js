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
      var optPic1 = document.getElementById('optPic1').files[1];
      var optPic2 = document.getElementById('optPic2').files[2];
      var optPic3 = document.getElementById('optPic3').files[3];
      var optPic4 = document.getElementById('optPic4').files[4];
      var optPic5 = document.getElementById('optPic5').files[5];


      var headers = {
        'Content-Type' : undefined
      };
      var formData = new FormData();
      formData.append('file[image]', mainPic);
      formData.append('file[image]', optPic1);
      formData.append('file[image]', optPic2);
      formData.append('file[image]', optPic3);
      formData.append('file[image]', optPic4);
      formData.append('file[image]', optPic5);

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
