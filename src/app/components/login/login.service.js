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

  login(user) {
    // @todo: check if Email
    // @todo: extend with email or login property and then send

    //if (this.isEmail(user.))
    let credentials = {
      email: user.nickname,
      password: user.password
    };

    this.Login.save(angular.toJson(credentials), (data) => {
      this.user.token = data.token;
    });
  }

  isEmail(string) {
    let re = /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm;
    return re.test(string);
  }

  closeDialog() {
    this.dialogService.hideDialog();
  }

  getUser() {
    return this.user;
  }

}
