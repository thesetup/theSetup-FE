;(function (){

  'use strict';

  angular.module('Profile')

  .controller('SearchController', ['$scope', 'SearchService', function ($scope, SearchService) {



    $scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
    };



  }]);

}());
