'use strict';

/**
 * @ngdoc overview
 * @name ixigoTestApp
 * @description
 * # ixigoTestApp
 *
 * Main module of the application.
 */
angular
  .module('ixigoTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/flights', {
        templateUrl: 'views/flights.html',
        controller: 'FlightsCtrl'
      })
      .when('/hotels', {
        templateUrl: 'views/hotels.html',
        controller: 'HotelsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
