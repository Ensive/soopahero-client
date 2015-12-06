export class LoginController {
  constructor(loginService) {
    'ngInject';

    this.loginService = loginService;
    this.user = this.loginService.getUser();
  }

  login(nickname, password) {
    this.loginService.login(nickname, password);
  }

}
