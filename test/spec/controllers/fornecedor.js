'use strict';

describe('Controller: FornecedorCtrl', function () {

  // load the controller's module
  beforeEach(module('hackathonFinitApp'));

  var FornecedorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FornecedorCtrl = $controller('FornecedorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FornecedorCtrl.awesomeThings.length).toBe(3);
  });
});
