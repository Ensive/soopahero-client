import { sharedSetup } from '../../../../spec/helper.spec';

describe('dialogService', function () {
  var mdDialog;

  sharedSetup();

  beforeEach(inject(($mdDialog, dialogService) => {
    mdDialog = $mdDialog;

    spyOn(dialogService, 'showAdvancedDialog');
    spyOn(dialogService, 'hideDialog');
  }));

  it('should be registered', inject(dialogService => {
    expect(dialogService).not.toEqual(null);
    expect(dialogService.mdDialog).toEqual(mdDialog);
  }));

  describe('show advanced dialog function', () => {
    it('should be defined and callable', inject(function (dialogService) {
      dialogService.showAdvancedDialog({}, {});
      expect(dialogService.showAdvancedDialog).toHaveBeenCalled();
      expect(dialogService.showAdvancedDialog.calls.count()).toBe(1);
    }));
  });

  describe('hide dialog function', function () {
    it('should be defined and callable', inject(function (dialogService) {
      dialogService.hideDialog();
      expect(dialogService.hideDialog).toHaveBeenCalled();
    }));
  });

});
