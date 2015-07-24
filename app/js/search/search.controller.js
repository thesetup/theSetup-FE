;(function (){

  'use strict';

  angular.module('Profile')

  .controller('SearchController', ['API', '$rootScope', '$http', '$state', '$scope', 'SearchService', 'UserService', 'ProfileService', function (API, $rootScope, $http, $state, $scope, SearchService, UserService, ProfileService) {

    $scope.searchdata = [];
    $scope.dataHasLoaded = false;


    // grabs the params that were sent for search, only sends the params
    // that are not undefined. Recieves data back and converts birthyear
    // to age before rendering on page
    $scope.search = function(gender, location, orient) {
      console.log(gender);
      console.log(location);
      console.log(orient);
        var params = [];
      if (gender !== undefined) {
        var param1 = gender.keywords;
        params.push(param1);
      }
      if (location !== undefined) {
        var param2 = location.keywords;
        params.push(param2);
      }
      if (orient !== undefined) {
        var param3 = orient.keywords;
        params.push(param3);
      }
      SearchService.goSearch(params)
      .then(function (data) {
        console.log(data);
        var searchdata = data.data;
        $scope.searchdata = searchdata;
        $scope.dataHasLoaded = true;
        var currYear = new Date().getFullYear();
        _.each(searchdata.questions, function(bar) {
            var currAge = (currYear - bar.birthyear);
            bar.age = currAge;
        });

     });
    };

    // age range I want for min age and max age on search criteria
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
