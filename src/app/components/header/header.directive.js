export function HeaderDirective() {
  'njInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/header/header.html',
    scope: {

    },
    controller: HeaderController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class HeaderController {

}
