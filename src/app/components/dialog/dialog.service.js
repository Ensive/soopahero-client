export class DialogService {
  constructor($document, $mdDialog, $mdMedia) {
    'ngInject';
    // services
    this.document = $document;
    this.mdDialog = $mdDialog;
    this.mdMedia = $mdMedia;
  }

  showAdvancedDialog(e, config) {
    return this.mdDialog.show({
      controller: config.controller,
      controllerAs: 'vm',
      templateUrl: config.templateUrl,
      parent: angular.element(this.document[0].body),
      targetEvent: e,
      clickOutsideToClose: true,
      fullscreen: this.mdMedia('xs') || this.mdMedia('sm'),
      onComplete: (scope, element) => {
        element[0].querySelector('input').focus();
      }
    });
    //.then(this.openLoginFormSuccess, this.openLoginFormFail);
  }

  //showConfirmationDialog() {}
  //showAlertDialog() {}
  hideDialog() {
    this.mdDialog.hide();
  }

}
