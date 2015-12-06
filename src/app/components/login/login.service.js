export class LoginService {
  constructor($resource, SH_CONSTANTS, dialogService) {
    'ngInject';

    this.resource = $resource;
    this.dialogService = dialogService;

    this.apiUrl = `${SH_CONSTANTS.PROTOCOL}://${SH_CONSTANTS.DOMAIN}/api/`;
    this.Login = this.resource(`${this.apiUrl}login`);
    this.user = {
      nickname: 'superman@soopahero.com',
      password: undefined,
      token: undefined
    };
  }

  showLoginDialog(e) {
    this.dialogService.showAdvancedDialog(e);
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

  getUser() {
    return this.user;
  }

}
