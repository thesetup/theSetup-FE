;(function (){

  'use strict';

  angular.module('Profile')

  .service('SearchService', ['API', '$cookies', '$rootScope', '$state', '$http', function (API, $cookies, $rootScope, $state, $http) {

      this.goSearch = function () {
      return $http({
        method: 'GET',
        url: API.URL + '/profiles',
        headers: API.CONFIG.headers

      });
    };




  }]);

}());
