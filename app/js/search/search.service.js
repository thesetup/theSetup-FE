;(function (){

  'use strict';

  angular.module('Profile')

  .service('SearchService', ['API', '$cookies', '$rootScope', '$state', '$http', function (API, $cookies, $rootScope, $state, $http) {

    // GET request for search results
    this.goSearch = function (params) {

      var p = {keywords: params.toString()};
      return $http({
        method: 'GET',
        url: API.URL + '/questions/search',
        headers: API.CONFIG.headers,
        params: p
      });
    };

    // GET request for dashboard profile management list of profiles created
    this.searching = function () {
      return $http({
        method: 'GET',
        url: API.URL + '/profiles',
        headers: API.CONFIG.headers
      });
    };




  }]);

}());
