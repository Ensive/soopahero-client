export class SignUpService {
  constructor(_, $resource, helperService, dialogService, loginService) {
    'ngInject';

    this._ = _;
    this.dialogService = dialogService;
    this.loginService = loginService;
    this.user = this.loginService.getUser();
    this.newUser = {
      nickname: null,
      email: null,
      password: null
    };

    this.Register = $resource(helperService.getApiUrl('heroes'));
  }

  register(user) {
    this.Register.save(angular.toJson(user), _registerSuccess.bind(this), _registerError.bind(this))
  }

  getUser() {
    return this.newUser;
  }

  showSignUpDialog(e) {
    let dialogConfig = {
      controller: 'SignUpController',
      templateUrl: 'app/components/sign-up/sign-up.html'
    };
    this.dialogService.showAdvancedDialog(e, dialogConfig);
  }
}

function _registerSuccess(data, headers) {
  this.user.token = data.token ? data.token : null;
  this.user = this._.merge(this.user, this.newUser);
  this.dialogService.hideDialog();
  // @todo: spinning; show loginDialog; confirm email message
}

function _registerError(error) {
  // @todo: show error messages depending on the status code
  if (error.status == 409) {}
  if (error.status == 400) {}
}
