export class DialogService {
  constructor($mdDialog, $document) {
    'ngInject';
    // services
    this.$mdDialog = $mdDialog;
    this.$document = $document;
  }

  showAdvancedDialog(e) {
    return this.$mdDialog.show({
        controller: () => {},
        templateUrl: '',
        parent: angular.element(this.$document[0].body),
        targetEvent: e,
        clickOutsideToClose: true
      });
      //.then(this.openLoginFormSuccess, this.openLoginFormFail);
  }

  //showConfirmationDialog() {}
  //showAlertDialog() {}
  //hideDialog() {}

}
