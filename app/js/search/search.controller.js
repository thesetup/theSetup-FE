;(function (){

  'use strict';

  angular.module('Profile')

  .controller('SearchController', ['API', '$rootScope', '$http', '$state', '$scope', 'SearchService', 'UserService', 'ProfileService', function (API, $rootScope, $http, $state, $scope, SearchService, UserService, ProfileService) {

    $scope.searchdata = [];

    $scope.search = function() {
      SearchService.goSearch()
      .then(function (data) {
        var searchdata = data.data;
        console.log(searchdata);
        $scope.searchdata = searchdata;
        var currYear = new Date().getFullYear();
        console.log(searchdata.questions);
        _.each(searchdata.questions, function(bar) {
            var currAge = (currYear - bar.birthyear);
            bar.age = currAge;
        });

      });
    };

    $scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
    };

    $scope.takemetoSearch = function () {
      $state.go('search');
    };




  }]);

}());
