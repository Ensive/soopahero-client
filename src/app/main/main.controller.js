export class MainController {
  constructor (loginService, signUpService) {
    'ngInject';

    this.loginService = loginService;
    this.signUpService = signUpService;
  }

  openLoginForm(e) {
    this.loginService.showLoginDialog(e);
  }

  openSignUpForm(e) {
    this.signUpService.showSignUpDialog(e);
  }
}
