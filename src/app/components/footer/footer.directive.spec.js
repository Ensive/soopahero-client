import { sharedSetup } from '../../../../spec/helper.spec';

describe('footer directive', () => {
  let vm;
  let element;

  sharedSetup();

  beforeEach(inject(($compile, $rootScope) => {
    element = angular.element('<sh-footer></sh-footer>');

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.scope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have a child scope object with instantiated members', () => {
    let currentYear = new Date().getFullYear();

    expect(vm).toEqual(jasmine.any(Object));

    expect(vm.currentYear).toEqual(jasmine.any(Number));
    expect(vm.currentYear).toEqual(currentYear);
  });

});
