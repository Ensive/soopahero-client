export class ForgotPasswordController {
  constructor(loginService) {
    'ngInject';

    this.loginService = loginService;
  }

  closeDialog() {
    this.loginService.closeDialog();
  }
}
