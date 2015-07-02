;(function (){

  'use strict';

  angular.module('app', ['ui.router', 'ngCookies', 'ngMaterial', 'UserServiceModule'])

  .config(['$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'js/templates/home.tpl.html',
          controller: function ($scope, $state, UserService) {
            if(UserService.checkLogin){
              $state.go('home.loggedin');
            }else{
              $state.go('home.public');
            }
          }
        })

        .state('home.loggedin', {
          url: '',
          templateUrl: 'js/templates/homeloggedin.tpl.html',
          controller: 'DashboardController'
        })
        .state('home.public', {
          url: '',
          templateUrl: 'js/templates/homenotloggedin.tpl.html',
          controller: 'PublicController'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'js/templates/about.tpl.html',
          controller: 'PublicController'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'js/templates/login.tpl.html',
          controller: 'UserController'
        });


    }

  ]);

}());
