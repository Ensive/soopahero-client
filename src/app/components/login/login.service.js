export class LoginService {
  constructor($resource, SH_CONSTANTS, dialogService) {
    'ngInject';

    this.resource = $resource;
    this.dialogService = dialogService;

    this.apiUrl = `${SH_CONSTANTS.PROTOCOL}://${SH_CONSTANTS.DOMAIN}/api/`;
    this.Login = this.resource(`${this.apiUrl}login`);
    this.user = {
      nickname: undefined,
      email: undefined,
      password: undefined,
      token: undefined
    };
  }

  showLoginDialog(e) {
    let dialogConfig = {
      controller: 'LoginController',
      templateUrl: 'app/components/login/login.html'
    };
    this.dialogService.showAdvancedDialog(e, dialogConfig);
  }

  showForgotPasswordDialog(e) {
    let dialogConfig = {
      controller: 'ForgotPasswordController',
      templateUrl: 'app/components/login/forgot-password/forgot-password.html'
    };
    this.dialogService.showAdvancedDialog(e, dialogConfig);
  }

  login(nickname, password) {
    let credentials = {
      email: nickname,
      password: password
    };

    this.Login.save(angular.toJson(credentials), (data) => {
      this.user.token = data.token;
    });
  }

  closeDialog() {
    this.dialogService.hideDialog();
  }

  getUser() {
    return this.user;
  }

}
