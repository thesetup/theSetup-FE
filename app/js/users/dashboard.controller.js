;(function (){

  'use strict';

  angular.module('User')

  .controller('DashboardController', ['$scope', '$cookies', '$http', '$state', 'UserService', 'ProfileService', function ($scope, $cookies, $http, $state, UserService, ProfileService) {

    $scope.user = $cookies.getObject('currentUser');

  }]);

}());
