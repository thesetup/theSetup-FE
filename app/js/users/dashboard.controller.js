;(function (){

  'use strict';

  angular.module('User')

  .controller('DashboardController', ['API','$scope', '$cookies', '$http', '$state', 'UserService', 'ProfileService', 'SearchService', function (API, $scope, $cookies, $http, $state, UserService, ProfileService, SearchService) {

    UserService.checkLogin();

    $scope.user = $cookies.getObject('currentUser');

    SearchService.goSearch().success( function (data) {
      var dashprofiles = _.where(data.profiles, {profiler_id: $scope.user.id});
      _.each(dashprofiles, function(profile){
        var q = _.find(data.question, function(question){
          return question.profile_id === profile.id;
        });
        profile.name = q.name;
      });
      $scope.dashprofiles = dashprofiles;
    });


  }]);

}());
