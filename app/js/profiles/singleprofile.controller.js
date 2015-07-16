;(function (){

  'use strict';

  angular.module('Profile')

  .controller('SingleProfileController', ['$cookies', '$scope', '$state', 'ProfileService', 'UserService', 'SearchService', '$stateParams', function ($cookies, $scope, $state, ProfileService, UserService, SearchService, $stateParams) {

    ProfileService.getSingleProfile($stateParams.id).then(function (data) {
      var questions = data.data.questions[0];
      $scope.questions = questions;

      var createdBy = data.data.profiles;

    ProfileService.getCreator(createdBy.profiler_id).then(function(data) {
        var creator = data.data.username;
        $scope.creator = creator;


    var currYear = new Date().getFullYear();
      $scope.questions.age = (currYear - questions.birthyear);
    });
    });


  }]);

}());
