export function HeaderDirective() {
  'njInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/header/header.html',
    controller: HeaderController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class HeaderController {
  constructor(translationService) {
    'ngInject';

    translationService.getGeneralTranslations()
      .then((translations) => {
        this.logIn = translations.logIn;
        this.signUp = translations.signUp;
      });
  }

}
