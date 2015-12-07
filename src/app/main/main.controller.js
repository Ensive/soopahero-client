export class MainController {
  constructor (loginService) {
    'ngInject';

    this.loginService = loginService;
  }

  openLoginForm(e) {
    this.loginService.showLoginDialog(e);
  }
}
