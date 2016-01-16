export class SignUpController {
  constructor(loginService, signUpService) {
    'ngInject';

    this.loginService = loginService;
    this.signUpService = signUpService;
    this.user = this.signUpService.getUser();
    this.isSubmitDisabled = false;
    // @todo: init the form, store data in local storage
  }

  register() {
    this.isSubmitDisabled = true;
    // @todo: implement spinner
    this.signUpService.register(this.user).finally(() => {
      this.isSubmitDisabled = false;
    });
  }

  initForm() {}

  closeDialog() {
    this.loginService.closeDialog();
  }
}
