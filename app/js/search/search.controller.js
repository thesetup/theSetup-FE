;(function (){

  'use strict';

  angular.module('Profile')

  .controller('SearchController', ['$rootScope', '$state', '$scope', 'SearchService', 'UserService', 'ProfileService', function ($rootScope, $state, $scope, SearchService, UserService, ProfileService) {

    $scope.searchdata = [];

    $scope.search = function() {
      SearchService.goSearch()
      .then(function (data) {
        var searchdata = data.data;
        $scope.searchdata = searchdata;
        var currYear = new Date().getFullYear();
        var foo = _.each(searchdata.questions, function(bar) {
            var currAge = (currYear - bar.birthyear);
            console.log(currAge);
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
