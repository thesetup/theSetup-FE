;(function (){

  'use strict';

  angular.module('Profile')

  .service('SearchService', ['API', '$cookies', '$rootScope', '$state', '$http', function (API, $cookies, $rootScope, $state, $http) {

      this.goSearch = function (gender, location, orient) {
      var p = {keywords: gender.keywords + ',' + location.keywords + ',' + orient.keywords};
      return $http({
        method: 'GET',
        url: API.URL + '/questions/search',
        headers: API.CONFIG.headers,
        params: p

      });
    };

    this.searching = function () {
      return $http({
        method: 'GET',
        url: API.URL + '/profiles',
        headers: API.CONFIG.headers
      });
    };




  }]);

}());
