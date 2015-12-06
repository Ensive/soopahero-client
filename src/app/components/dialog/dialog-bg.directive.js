export function DialogBgDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/dialog/dialog-bg.html',
    scope: {
      imageSrc: '@'
    },
    replace: true
  };

  return directive;
}
