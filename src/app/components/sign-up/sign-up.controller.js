export class SignUpController {
  constructor(loginService, signUpService) {
    'ngInject';

    this.loginService = loginService;
    this.signUpService = signUpService;
    this.user = this.loginService.getUser();
  }

  register(user) {
    this.signUpService.register(user)
  }

  closeDialog() {
    this.loginService.closeDialog();
  }
}
