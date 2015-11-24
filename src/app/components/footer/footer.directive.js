export function FooterDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/footer/footer.html',
    scope: {},
    controller: FooterController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };

  return directive;
}

class FooterController {
  constructor(translationService) {
    'ngInject';

    this.text = {};
    this.currentYear = new Date().getFullYear();

    translationService.getGeneralTranslations()
      .then((translations) => {
        let text = this.text;

        text.logIn = translations.logIn;
        text.signUp = translations.signUp;
        text.allRightsReserved = translations.allRightsReserved;
        text.termsAndConditions = translations.termsAndConditions;
        text.contactUs = translations.contactUs;
      });
  }
}
