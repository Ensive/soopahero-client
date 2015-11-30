export function HeaderDirective() {
  'njInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/header/header.html',
    controller: HeaderController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };

  return directive;
}

class HeaderController {
  constructor() {
    'ngInject';
    this.isUserLoggedIn = false;
  }

}
