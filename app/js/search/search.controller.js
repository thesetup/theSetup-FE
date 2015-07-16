;(function (){

  'use strict';

  angular.module('Profile')

  .controller('SearchController', ['API', '$rootScope', '$http', '$state', '$scope', 'SearchService', 'UserService', 'ProfileService', function (API, $rootScope, $http, $state, $scope, SearchService, UserService, ProfileService) {

    $scope.searchdata = [];

    $scope.search = function() {
      SearchService.goSearch()
      .then(function (data) {
        var searchdata = data.data;
        $scope.searchdata = searchdata;
        console.log(searchdata);
        var currYear = new Date().getFullYear();
        var foo = _.each(searchdata.questions, function(bar) {
            var currAge = (currYear - bar.birthyear);
            bar.age = currAge;
        });

        var createdBy = _.each(searchdata.profiles, function (pizza) {
          var profilerID = pizza.profiler_id;
          console.log(profilerID);
          $http.get(API.URL + '/users/' + profilerID);
          $scope.created_by = pizza.username;
          console.log($scope.created_by);
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
