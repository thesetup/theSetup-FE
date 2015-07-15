;(function (){

  'use strict';

  angular.module('User')

  .controller('PublicController', ['$scope', 'UserService', function ($scope, UserService) {


     $('.slider').slider({ full_width: true });

  }]);

}());
