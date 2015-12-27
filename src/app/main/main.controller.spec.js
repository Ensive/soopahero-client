describe('Main Controller', () => {
  let vm;

  beforeEach(angular.mock.module('soopaheroClient'));

  beforeEach(inject(($controller, loginService, signUpService) => {
    spyOn(loginService, 'showLoginDialog');
    spyOn(signUpService, 'showSignUpDialog');
    vm = $controller('MainController');
  }));

  it('should have access to loginService and signUpService', () => {
    expect(vm.loginService).toEqual(jasmine.any(Object));
    expect(vm.signUpService).toEqual(jasmine.any(Object));
  });

  it('should open login dialog', () => {
    let showLoginDialog = vm.loginService.showLoginDialog;
    vm.openLoginForm();

    expect(showLoginDialog).toHaveBeenCalled();
    expect(showLoginDialog.calls.count()).toBe(1);
  });

  it('should open sign-up dialog', () => {
    let showSignUpDialog = vm.signUpService.showSignUpDialog;
    vm.openSignUpForm();

    expect(showSignUpDialog).toHaveBeenCalled();
    expect(showSignUpDialog.calls.count()).toBe(1);
  });

});
