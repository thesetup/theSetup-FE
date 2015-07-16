;(function (){

  'use strict';

  angular.module('app', ['ui.router', 'ngCookies', 'User', 'Profile', 'Application'])

  .constant('API', {
    URL: 'https://still-island-6789.herokuapp.com',
    CONFIG: {
      headers: {
        'Access-Token' : ''
      }
    }
  })

  .config(['$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'js/templates/home.tpl.html',
          controller: function ($scope, $state, UserService) {
            if(UserService.isLoggedIn()){
              $state.go('home.loggedin');
            }else{
              setTimeout( function () {
                $state.go('home.public');
              }, 0);
            }
          }
        })

        .state('home.loggedin', {
          url: '',
          views: {
            'header' : {
              templateUrl: 'js/templates/homeloggedin.tpl.html',
              controller: 'UserController'
            },
            'dashboardView': {
              templateUrl: 'js/templates/dashboard.tpl.html',
              controller: 'DashboardController'
            },
            'searchView' : {
              templateUrl: 'js/templates/search.tpl.html',
              controller: 'SearchController'
            },
             'newsView' : {
              templateUrl: 'js/templates/news.tpl.html',
              controller: 'PublicController'
             }

          }
        })
        .state('home.public', {
          url: '',
          views: {
            'header' : {
              templateUrl: 'js/templates/homenotloggedin.tpl.html',
              controller: 'UserController'
            },
            'slider' : {
              templateUrl: 'js/templates/slider.tpl.html',
              controller: 'PublicController'
            },
            'aboutView' : {
              templateUrl: 'js/templates/about.tpl.html',
              controller: 'PublicController'
            },
            'loginView' : {
              templateUrl: 'js/templates/login.tpl.html',
              controller: 'UserController'
            },
            'newsView' : {
              templateUrl: 'js/templates/news.tpl.html',
              controller: 'PublicController'
            }
          }
        })
        .state('login', {
          url: '/login',
          templateUrl: 'js/templates/login.tpl.html',
          controller: 'UserController'
        })
        .state('search', {
          url: '/search',
          templateUrl: 'js/templates/searchmain.tpl.html',
          controller: 'SearchController'
        })
        .state('createprofile', {
          url: '/create',
          templateUrl: 'js/templates/create.tpl.html',
          controller: 'ProfileController'
        })
        .state('singleprofile', {
          url: '/single/:id',
          templateUrl: 'js/templates/singleprofile.tpl.html',
          controller: 'SingleProfileController'
        });

    }

  ])

  .run(['$rootScope', 'UserService', '$state', '$cookies', function ($rootScope, UserService, $state, $cookies) {


    $rootScope.$on('$stateChangeSuccess', function () {

      if(!$state.includes('home')){
        UserService.checkLogin();
      }


    });

  }]);

}());
