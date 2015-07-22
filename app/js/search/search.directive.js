;(function (){

  'use strict';

  angular.module('Profile')

  .directive('searchResults', function () {

    return {

      restrict: 'EA',
      replace: true,
      templateUrl: 'js/templates/searchResults.tpl.html',
      scope: {
        searchdata: '=searchdata',
        user: '=user'
      },
      controller: function ($scope) {

        // grabs avatar from profiles array then grabs
        // questions from questions array for search
        // results cards
        $scope.avatar = $scope.user.avatar_url;
        if ($scope.avatar == "/avatars/original/missing.png") {
          $scope.avatar = $scope.user.avatar_remote_url;
        }
        $scope.s = _.findWhere($scope.searchdata.questions, { profile_id: $scope.user.id });
      }

    };


  });

}());
