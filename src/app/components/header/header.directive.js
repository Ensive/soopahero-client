export function HeaderDirective() {
  'njInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/header/header.html',
    scope: {},
    controller: HeaderController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };

  return directive;
}

class HeaderController {
  constructor(translationService) {
    'ngInject';

    this.text = {};

    translationService.getGeneralTranslations()
      .then((translations) => {
        this.text.logIn = translations.logIn;
        this.text.signUp = translations.signUp;
      });
  }

}
