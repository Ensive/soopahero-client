export class LoginService {
  constructor($rootScope, $resource, $state, SH_CONSTANTS, helperService, dialogService) {
    'ngInject';

    this.rootScope = $rootScope;
    this.resource = $resource;
    this.state = $state;
    this.dialogService = dialogService;
    this.helperService = helperService;

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
    let isEmail = this.helperService.isEmail;
    let credentials = {};

    if (isEmail(user.nickname)) {
      credentials.email = user.nickname;
    } else {
      credentials.login = user.nickname;
    }

    credentials.password = user.password;

    this.Login.save(angular.toJson(credentials), (data) => {
      this.user.token = data.token ? data.token : null;
      this.rootScope.home = '#/dashboard';
      this.dialogService.hideDialog();
      this.state.go('dashboard');
    });
  }

  closeDialog() {
    this.dialogService.hideDialog();
  }

  getUser() {
    return this.user;
  }

}
