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
      console.log(data);
      $cookies.put('currentprofileID', data.profiles.id);
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


    this.getSingleProfile = function (pid) {
      return $http({
        method: 'GET',
        url: API.URL + '/profiles/' + pid,
        headers: API.CONFIG.headers
      });
    };

    this.getCreator = function (cid) {
      return $http({
        method: 'GET',
        url: API.URL + '/users/' + cid,
        headers: API.CONFIG.headers
      });
    };


    this.imageUpload = function () {
      var pid = $cookies.get('currentprofileID');
      console.log(pid);
      var mainPic = document.getElementById('mainPhoto').files[0];


      var headers = {
        'Content-Type' : undefined,
        'Access-Token' : $cookies.get('access_token')
      };
      var formData = new FormData();
      formData.append('avatar', mainPic);

      console.log(formData);

      $http({
        method: 'PUT',
        url: API.URL + '/profiles/' + pid + '/avatar',
        data: formData,
        headers: headers

      }).success(function (data) {
        console.log('success!');
        _imageSuccess(data);
      });
    };




  }]);

}());
