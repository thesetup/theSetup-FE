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
        $scope.avatar = $scope.user.avatar_url;
        $scope.s = _.findWhere($scope.searchdata.questions, { profile_id: $scope.user.id });
      }

    };


  });

}());
