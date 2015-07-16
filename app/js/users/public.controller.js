;(function (){

  'use strict';

  angular.module('User')

  .controller('PublicController', ['$scope', 'UserService', function ($scope, UserService) {

    $(document).ready(function () {
     $('.slider').slider();
   });

  }]);

}());
