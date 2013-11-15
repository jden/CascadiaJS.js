'use strict';
angular.module('cascadiaJsjsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/0', {
        templateUrl: 'views/0.html',
        controller: 'MainCtrl'
      })
      .when('/1', {
        templateUrl: 'views/1.html',
        controller: 'MainCtrl'
      })
      .when('/2', {
        templateUrl: 'views/2.html',
        controller: 'MainCtrl'
      })
      .when('/3', {
        templateUrl: 'views/3.html',
        controller: 'MainCtrl'
      })
      .when('/4', {
        templateUrl: 'views/4.html',
        controller: 'MainCtrl'
      })
      .when('/5', {
        templateUrl: 'views/5.html',
        controller: 'MainCtrl'
      })
      .when('/6', {
        templateUrl: 'views/6.html',
        controller: 'MainCtrl'
      })
      .when('/7', {
        templateUrl: 'views/7.html',
        controller: 'MainCtrl'
      })
      .when('/8', {
        templateUrl: 'views/8.html',
        controller: 'MainCtrl'
      })
      .when('/9', {
        templateUrl: 'views/9.html',
        controller: 'MainCtrl'
      })
      .when('/10', {
        templateUrl: 'views/10.html',
        controller: 'MainCtrl'
      })
      .when('/11', {
        templateUrl: 'views/11.html',
        controller: 'MainCtrl'
      })
      .when('/12', {
        templateUrl: 'views/12.html',
        controller: 'MainCtrl'
      })
      .when('/13', {
        templateUrl: 'views/13.html',
        controller: 'MainCtrl'
      })
      .when('/14', {
        templateUrl: 'views/14.html',
        controller: 'MainCtrl'
      })
      .when('/15', {
        templateUrl: 'views/15.html',
        controller: 'MainCtrl'
      })
      .when('/16', {
        templateUrl: 'views/16.html',
        controller: 'MainCtrl'
      })
      .when('/17', {
        templateUrl: 'views/17.html',
        controller: 'MainCtrl'
      })
      .when('/18', {
        templateUrl: 'views/18.html',
        controller: 'MainCtrl'
      })
      .when('/19', {
        templateUrl: 'views/19.html',
        controller: 'MainCtrl'
      })
      .when('/20', {
        templateUrl: 'views/20.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
