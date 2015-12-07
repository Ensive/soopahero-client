/* global */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { constants } from './index.constants';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from '../app/components/login/login.controller';
import { ForgotPasswordController } from '../app/components/login/forgot-password/forgot-password.controller';
//import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { HeaderDirective } from '../app/components/header/header.directive';
import { DialogBgDirective } from '../app/components/dialog/dialog-bg.directive';
import { DialogCloseDirective } from '../app/components/dialog/dialog-close.directive';
import { DialogService } from '../app/components/dialog/dialog.service';
import { LoginService } from '../app/components/login/login.service';
import { FooterDirective } from '../app/components/footer/footer.directive';
//import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

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
  //.constant('malarkey', malarkey)
  //.constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .constant('SH_CONSTANTS', constants)
  .run(runBlock)
  //.service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .controller('ForgotPasswordController', ForgotPasswordController)
  //.directive('acmeMalarkey', MalarkeyDirective)
  .service('dialogService', DialogService)
  .service('loginService', LoginService)
  .directive('shHeader', HeaderDirective)
  .directive('shFooter', FooterDirective)
  .directive('shDialogClose', DialogCloseDirective)
  .directive('shDialogBg', DialogBgDirective);
