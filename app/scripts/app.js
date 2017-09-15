'use strict';

/**
 * @ngdoc overview
 * @name hackathonFinitApp
 * @description
 * # hackathonFinitApp
 *
 * Main module of the application.
 */
angular
  .module('hackathonFinitApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/startups', {
        templateUrl: 'views/startups/list.html',
        controller: 'StartupsListCtrl',
        controllerAs: 'startups'
      })
      .when('/startups/:id', {
        templateUrl: 'views/startups/edit.html',
        controller: 'StartupsEditCtrl',
        controllerAs: 'startups'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
