'use strict';

/**
 * @ngdoc service
 * @name hackathonFinitApp.myService
 * @description
 * # myService
 * Service in the hackathonFinitApp.
 */
angular.module('hackathonFinitApp')
  .service('startupService', ['$http', function ($http) {
    let API = 'http://demo8906598.mockable.io/';
    let LIST_ENDPOINT = 'startups';

    this.list = function () {
      return $http.get(API + LIST_ENDPOINT);
    };

    this.save = function () {
      //TODO: When firebase is ready
    };

    this.delete = function () {
      //TODO: When firebase is ready
    };
  }]);
