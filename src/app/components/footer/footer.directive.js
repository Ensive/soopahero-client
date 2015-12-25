export function FooterDirective() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/footer/footer.html',
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
