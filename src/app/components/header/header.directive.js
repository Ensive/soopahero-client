export function HeaderDirective() {
  'njInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/header/header.html',
    scope: {},
    controller: HeaderController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };

  return directive;
}

class HeaderController {
  constructor(loginService) {
    'ngInject';
    this.loginService = loginService;
    this.isUserLoggedIn = false;
  }

  openLoginForm(e) {
    this.loginService.showLoginDialog(e);
  }

}
