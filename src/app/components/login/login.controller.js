export class LoginController {
  constructor(loginService) {
    'ngInject';

    this.loginService = loginService;
    this.user = this.loginService.getUser();
  }

  login() {
    this.loginService.login(this.user);
  }

  showForgotPasswordDialog(e) {
    this.loginService.showForgotPasswordDialog(e);
  }

  closeDialog() {
    this.loginService.closeDialog();
  }

}
