;(function (){

  'use strict';

  angular.module('Profile')

  .controller('ProfileController', ['$cookies', '$scope', '$state', 'ProfileService', 'UserService', 'SearchService', '$stateParams', function ($cookies, $scope, $state, ProfileService, UserService, SearchService, $stateParams) {

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
      console.log(data.questions);
      console.log($stateParams.id);
      var singleID = Number($stateParams.id);
      console.log(singleID);
      $scope.result = _.findWhere(data.questions, {profile_id: singleID});

      console.log($scope.result);
    });


  }]);

}());
