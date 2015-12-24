export class LoginService {
  constructor(_, $rootScope, $resource, $state, helperService, dialogService) {
    'ngInject';

    this._ = _;
    this.rootScope = $rootScope;
    this.state = $state;
    this.dialogService = dialogService;
    this.helperService = helperService;

    this.Login = $resource(helperService.getApiUrl('login'));
    this.user = {
      nickname: undefined,
      email: undefined,
      password: undefined,
      token: undefined
    };
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

    this.Login.save(angular.toJson(credentials), _loginSuccess.bind(this), _loginError.bind(this));
  }

  getUser() {
    return this.user;
  }

  clearUser() {
    if (arguments.length == 0) {
      this._.each(this.user, (value, key, obj) => obj[key] = null);
    } else {
      this._.times(arguments.length, (n) => this.user[arguments[n]] = null);
    }
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

  closeDialog() {
    this.dialogService.hideDialog();
  }
}

// private
function _loginSuccess(data) {
  this.user.token = data.token ? data.token : null;
  this.rootScope.home = '#/dashboard';
  this.dialogService.hideDialog();
  this.state.go('dashboard');
}

function _loginError() {
  this.clearUser('password', 'token');
}
