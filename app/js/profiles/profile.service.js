;(function (){

  'use strict';

  angular.module('Profile')

  .service('ProfileService', ['$rootScope','$state', '$http', function ($rootScope, $state, $http) {

    var ProfileQuestions = function (options) {
      this.first_name = options.first_name;
      this.last_name = options.last_name;
      this.email = options.email;
      this.gender = options.gender;
      this.occupation = options.occupation;
      this.orientation = options.orientation;
      this.location = options.location;
      this.birthYear = options.birthYear;

    };

  }]);

}());
