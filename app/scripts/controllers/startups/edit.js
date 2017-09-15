'use strict';

/**
 * @ngdoc function
 * @name hackathonFinitApp.controller:StartupsIdCtrl
 * @description
 * # StartupsIdCtrl
 * Controller of the hackathonFinitApp
 */
angular.module('hackathonFinitApp')
  .controller('StartupsEditCtrl', function ($scope, $location, $routeParams, startupService) {
    let ctrl = $scope;

    ctrl.save = save;
    ctrl.cancel = cancel;

    function init() {
      startupService.list().then(function (response) {
        ctrl.editStartup = response.data[$routeParams.id - 1];
        console.log(ctrl.editStartup)
      })
    }

    function save() {
      //TODO
      $location.path('startups')
    }

    function cancel() {
      //TODO
      $location.path('startups')
    }

    //Init controller
    init();
  });
