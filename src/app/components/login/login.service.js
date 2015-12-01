export class LoginService {
  constructor($resource, SH_CONSTANTS, dialogService) {
    'ngInject';
    this.resource = $resource;
    this.dialogService = dialogService;

    this.apiUrl = `${SH_CONSTANTS.PROTOCOL}://${SH_CONSTANTS.DOMAIN}/api/`;
    this.Login = this.resource(`${this.apiUrl}login`);
  }

  showLoginDialog(e) {
    this.dialogService.showAdvancedDialog(e);
  }

  login(username, password) {
    // @todo: use sha256 or SSL
    let credentials = {
      email: username,
      password: password
    };
    this.Login.save(angular.toJson(credentials), () => {

    });
  }

}
