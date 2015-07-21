;(function (){

  'use strict';

  angular.module('Profile')

  .controller('SearchController', ['API', '$rootScope', '$http', '$state', '$scope', 'SearchService', 'UserService', 'ProfileService', function (API, $rootScope, $http, $state, $scope, SearchService, UserService, ProfileService) {

    $scope.searchdata = [];
    $scope.dataHasLoaded = false;

    $scope.search = function(gender, location, orient) {
      console.log(gender);
      console.log(location);
      console.log(orient);
      SearchService.goSearch(gender, location, orient)
      .then(function (data) {
        console.log(data);
        var searchdata = data.data;
        console.log(searchdata);
        $scope.searchdata = searchdata;
        $scope.dataHasLoaded = true;
        var currYear = new Date().getFullYear();
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
