export class SignUpService {
  constructor(dialogService) {
    'ngInject';

    this.dialogService = dialogService;
    this.newUser = {
      nickname: null,
      email: null,
      password: null
    };
  }

  register() {

  }

  showSignUpDialog(e) {
    let dialogConfig = {
      controller: 'SignUpController',
      templateUrl: 'app/components/sign-up/sign-up.html'
    };
    this.dialogService.showAdvancedDialog(e, dialogConfig);
  }

  getUser() {
    return this.newUser;
  }
}
