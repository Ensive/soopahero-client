describe('directive header', () => {
  let vm;
  let element;

  beforeEach(angular.mock.module('soopaheroClient', ($provide, $translateProvider) => {
    // translate provider
    $provide.factory('customLoader', ($q) => {
      return function () {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      };
    });

    $translateProvider.useLoader('customLoader');
    $translateProvider.preferredLanguage('en_US');
  }));

  beforeEach(inject(($compile, $rootScope) => {
    element = angular.element('<sh-header ng-cloak></sh-header>');

    // element
    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instantiated members', () => {
    expect(vm).toEqual(jasmine.any(Object));
    expect(vm.text).toEqual(jasmine.any(Object));

    expect(vm.text.logIn).toEqual(jasmine.any(String));
    expect(vm.text.logIn).toEqual('Log in');
  });

});
