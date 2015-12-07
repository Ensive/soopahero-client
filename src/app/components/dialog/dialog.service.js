export class DialogService {
  constructor($mdDialog, $document) {
    'ngInject';
    // services
    this.$mdDialog = $mdDialog;
    this.$document = $document;
  }

  showAdvancedDialog(e, config) {
    return this.$mdDialog.show({
      controller: config.controller,
      controllerAs: 'vm',
      templateUrl: config.templateUrl,
      parent: angular.element(this.$document[0].body),
      targetEvent: e,
      clickOutsideToClose: true
    });
    //.then(this.openLoginFormSuccess, this.openLoginFormFail);
  }

  //showConfirmationDialog() {}
  //showAlertDialog() {}
  hideDialog() {
    this.$mdDialog.hide();
  }

}
