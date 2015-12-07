export function HeaderDirective() {
  'njInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/header/header.html',
    controller: HeaderController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };
}

class HeaderController {
  constructor() {
    'ngInject';
    this.isUserLoggedIn = false;
  }

}
