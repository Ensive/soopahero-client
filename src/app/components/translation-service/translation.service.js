export class TranslationService {
  constructor($translate) {
    'ngInject';

    this.$translate = $translate;
  }

  getGeneralTranslations() {
    const general = 'SH.GENERAL.';

    return this.$translate([
      `${general}LOG_IN`,
      `${general}SIGN_UP`
    ]).then((translations) => {
      return {
        logIn: translations[`${general}LOG_IN`],
        signUp: translations[`${general}SIGN_UP`]
      };
    });
  }

}
