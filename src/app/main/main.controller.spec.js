describe('Main Controller', () => {
  let vm;

  beforeEach(angular.mock.module('soopaheroClient'));

  beforeEach(inject(($controller) => {
    vm = $controller('MainController');
  }));

  it('should have access to loginService and signUpService', () => {
    expect(vm.loginService).toEqual(jasmine.any(Object));
    expect(vm.signUpService).toEqual(jasmine.any(Object));
  });

});
