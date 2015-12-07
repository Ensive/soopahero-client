export class SignUpController {
  constructor(loginService) {
    'ngInject';

    this.loginService = loginService;
    this.user = this.loginService.getUser();
  }

  closeDialog() {
    this.loginService.closeDialog();
  }
}
