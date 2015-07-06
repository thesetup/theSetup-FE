;(function (){

  'use strict';

  angular.module('User')

  .controller('DashboardController', ['$scope', 'UserService', function ($scope, UserService) {


    $('#taketosearch').on('click', function () {
      window.location = '/#search';
    });


  }]);

}());
