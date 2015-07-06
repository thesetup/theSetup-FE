;(function (){

  'use strict';

  angular.module('app', ['ui.router', 'ngCookies', 'User', 'Profile', 'Application'])

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
          templateUrl: 'js/templates/search.tpl.html',
          controller: 'SearchController'
        })
        .state('searchresults', {
          url: '/search/results',
          templateUrl: 'js/templates/searchresults.tpl.html',
          controller: 'SearchController'
        })
        .state('createprofile', {
          url: '/create',
          templateUrl: 'js/templates/create.tpl.html',
          controller: function ($scope, $state, ProfileService) {
            $state.go('createprofile.create');
          }
        })
        .state('createprofile.create', {
          url: '',
          views: {
            'questions' : {
              templateUrl: 'js/templates/profilequestions.tpl.html',
              controller: 'QuestionController'
            },
            'pictures' : {
              templateUrl: 'js/templates/pictures.tpl.html',
              controller: 'PicturesController'
            },
            'video' : {
              templateUrl: 'js/templates/video.tpl.html',
              controller: 'VideoController'
            },
            'review' : {
              templateUrl: 'js/templates/review.tpl.html',
              controller: 'ProfileController'
            }
          }
        });



    }

  ]);

}());
