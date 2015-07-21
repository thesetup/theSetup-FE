;(function (){

  'use strict';

  angular.module('Profile')

  .service('SearchService', ['API', '$cookies', '$rootScope', '$state', '$http', function (API, $cookies, $rootScope, $state, $http) {

      this.goSearch = function (search) {

      return $http({
        method: 'GET',
        url: API.URL + '/questions/search',
        headers: API.CONFIG.headers,
        params: search

      });
    };




  }]);

}());
