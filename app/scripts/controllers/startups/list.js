'use strict';

/**
 * @ngdoc function
 * @name hackathonFinitApp.controller:StartupsCtrl
 * @description
 * # StartupsCtrl
 * Controller of the hackathonFinitApp
 */
angular.module('hackathonFinitApp')
  .controller('StartupsListCtrl', function ($scope, $location, startupService) {
    let ctrl = $scope;
    ctrl.savedStartups = null;
    ctrl.teste = null;

    ctrl.edit = edit;

    function init() {
      startupService.list().then(function (response) {
        ctrl.savedStartups = response.data;
      })
    }

    function edit(id) {
      $location.path('/startups/' + id);
    }


    //Init controller
    init();
  });
