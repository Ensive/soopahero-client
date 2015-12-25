export function FooterDirective() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/footer/footer.html',
    scope: true,
    controller: FooterController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };
}

class FooterController {
  constructor() {
    'ngInject';
    this.currentYear = new Date().getFullYear();
  }
}
