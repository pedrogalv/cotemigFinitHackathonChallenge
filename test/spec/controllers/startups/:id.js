'use strict';

describe('Controller: StartupsIdCtrl', function () {

  // load the controller's module
  beforeEach(module('hackathonFinitApp'));

  var StartupsIdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartupsIdCtrl = $controller('StartupsIdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StartupsIdCtrl.awesomeThings.length).toBe(3);
  });
});
