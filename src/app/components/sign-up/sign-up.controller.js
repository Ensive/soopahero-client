export class SignUpController {
  constructor(loginService, signUpService) {
    'ngInject';

    this.loginService = loginService;
    this.signUpService = signUpService;
    this.user = this.signUpService.getUser();
  }

  register() {
    this.signUpService.register(this.user)
  }

  closeDialog() {
    this.loginService.closeDialog();
  }
}
