export function config($logProvider, $translateProvider, $mdThemingProvider, SH_CONSTANTS, tmhDynamicLocaleProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  // set theme options
  $mdThemingProvider.theme('default')
    .primaryPalette('light-green')
    .accentPalette('orange');

  // Set options third-party lib
  //toastrConfig.allowHtml = true;
  //toastrConfig.timeOut = 3000;
  //toastrConfig.positionClass = 'toast-top-right';
  //toastrConfig.preventDuplicates = true;
  //toastrConfig.progressBar = true;

  // set translation options
  $translateProvider
    .useStaticFilesLoader({
      prefix: 'resources/translations/locale-',
      suffix: '.json'
    })
    .preferredLanguage(SH_CONSTANTS.PREFERRED_LOCALE)
    .useSanitizeValueStrategy('sanitize')
    .useLocalStorage()
    .useMissingTranslationHandlerLog();

  // define locales
  tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
}
