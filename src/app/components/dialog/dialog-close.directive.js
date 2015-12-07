export function DialogCloseDirective() {
  'ngInject';

  return {
    restrict: 'E',
    template: `
    <md-button class="md-fab sh-dialog-close" aria-label="Close dialog">
      <md-icon md-svg-src="assets/images/icons/icon-close.svg"></md-icon>
    </md-button>`,
    scope: {}
  };
}
