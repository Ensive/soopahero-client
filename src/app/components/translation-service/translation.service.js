export class TranslationService {
  constructor($translate) {
    'ngInject';

    this.$translate = $translate;
  }

  getGeneralTranslations() {
    const general = 'SH.GENERAL.';

    return this.$translate([
      `${general}LOG_IN`,
      `${general}SIGN_UP`,
      `${general}ALL_RIGHTS_RESERVED`,
      `${general}TERMS_AND_CONDITIONS`,
      `${general}CONTACT_US`
    ]).then((translations) => {
      return {
        logIn: translations[`${general}LOG_IN`],
        signUp: translations[`${general}SIGN_UP`],
        allRightsReserved: translations[`${general}ALL_RIGHTS_RESERVED`],
        termsAndConditions: translations[`${general}TERMS_AND_CONDITIONS`],
        contactUs: translations[`${general}CONTACT_US`]
      };
    });
  }

}
