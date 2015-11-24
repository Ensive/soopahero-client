/* global malarkey:false, moment:false */

import { constants } from './index.constants';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { HeaderDirective } from '../app/components/header/header.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';
import { TranslationService } from '../app/components/translation-service/translation.service';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('soopaheroClient',
  ['ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ngMaterial',
    'ui.router',
    'toastr',
    'pascalprecht.translate',
    'tmh.dynamicLocale'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('SH_CONSTANTS', constants)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('webDevTec', WebDevTecService)
  .service('translationService', TranslationService)
  .controller('MainController', MainController)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('shHeader', HeaderDirective)
  .directive('shFooter', FooterDirective);
