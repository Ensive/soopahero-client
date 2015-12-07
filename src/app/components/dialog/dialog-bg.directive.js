export function DialogBgDirective() {
  'ngInject';

  return {
    restrict: 'E',
    template: `
    <div class="sh-dialog-bg" hide-sm hide-md>
      <img class="sh-dialog-bg__image" ng-src="{{ imageSrc }}" alt="Background image" />
    </div>`,
    scope: {
      imageSrc: '@'
    },
    replace: true
  };
}
