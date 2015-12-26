import { sharedSetup } from '../../../../spec/helper.spec';

describe('directive header', () => {
  let vm;
  let element;

  sharedSetup();

  beforeEach(inject(($compile, $rootScope) => {
    element = angular.element('<sh-header></sh-header>');

    // element
    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.scope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have a child scope object with instantiated members', () => {
    expect(vm).toEqual(jasmine.any(Object));
    expect(vm.isUserLoggedIn).toBe(false);
  });

});
