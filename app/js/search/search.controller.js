;(function (){

  'use strict';

  angular.module('Profile')

  .controller('SearchController', ['$rootScope', '$scope', 'SearchService', 'UserService', 'ProfileService', function ($rootScope, $scope, SearchService, UserService, ProfileService) {

    $scope.searchdata = [];

    $scope.search = function() {
      SearchService.goSearch()
      .then(function (data) {
        $scope.searchdata = data.data;
      });
    };

    $scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
    };




  }]);

}());
