export class LoginController {
  constructor(loginService) {
    'ngInject';

    this.loginService = loginService;
    this.user = this.loginService.getUser();
  }

  login(user) {
    // @todo: remove undefined properties (here or in service ?)
    this.loginService.login(user);
  }

  showForgotPasswordDialog(e) {
    this.loginService.showForgotPasswordDialog(e);
  }

  closeDialog() {
    this.loginService.closeDialog();
  }

}
