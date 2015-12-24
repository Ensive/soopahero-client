export class SignUpService {
  constructor($resource, helperService, dialogService) {
    'ngInject';

    this.dialogService = dialogService;
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

function _registerSuccess() {

}

function _registerError() {

}
