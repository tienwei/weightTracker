'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('weightTracker'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define goal valid', inject(function($controller) {
    expect(scope.goalValid).toBeUndefined();

    $controller('MainCtrl', {
      $scope: scope
    });

    // expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
    // expect(scope.awesomeThings.length > 5).toBeTruthy();
  }));
});
