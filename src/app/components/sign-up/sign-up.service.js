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
