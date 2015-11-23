export function config($logProvider, $translateProvider, SH_CONSTANTS, toastrConfig, tmhDynamicLocaleProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  // translation options
  $translateProvider
    .useStaticFilesLoader({
      prefix: 'resources/translations/locale-',
      suffix: '.json'
    })
    .preferredLanguage(SH_CONSTANTS.PREFERRED_LOCALE)
    .useSanitizeValueStrategy('sanitize')
    .useMissingTranslationHandlerLog()
    .useLocalStorage();

  tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
}
