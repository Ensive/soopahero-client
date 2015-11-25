export class LoginService {
  constructor(dialogService) {
    'ngInject';
    this.dialogService = dialogService;
  }

  showLoginDialog(e) {
    this.dialogService.showAdvancedDialog(e);
  }
}
