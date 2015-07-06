;(function (){

  'use strict';

  angular.module('Profile')

  .controller('SearchController', ['$scope', 'SearchService', function ($scope, SearchService) {

    $('#takemehome').on('click', function () {
      console.log('Button was clicked');
      window.location = '/';

    });


  }]);

}());
