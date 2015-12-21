/* global */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { constants } from './index.constants';
import { runBlock } from './index.run';
import { lodashFactory } from '../app/utils/lodash.factory';
import { MainController } from './main/main.controller';
import { LoginController } from '../app/components/login/login.controller';
import { SignUpController } from '../app/components/sign-up/sign-up.controller';
import { ForgotPasswordController } from '../app/components/login/forgot-password/forgot-password.controller';
import { PostsController } from '../app/posts/posts.controller.js'
import { HeaderDirective } from '../app/components/header/header.directive';
import { DialogBgDirective } from '../app/components/dialog/dialog-bg.directive';
import { DialogCloseDirective } from '../app/components/dialog/dialog-close.directive';
import { DialogService } from '../app/components/dialog/dialog.service';
import { LoginService } from '../app/components/login/login.service';
import { SignUpService } from '../app/components/sign-up/sign-up.service';
import { FooterDirective } from '../app/components/footer/footer.directive';

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
  //.constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .constant('SH_CONSTANTS', constants)
  .run(runBlock)
  .factory('_', lodashFactory)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .controller('SignUpController', SignUpController)
  .controller('ForgotPasswordController', ForgotPasswordController)
  .controller('PostsController', PostsController)
  .service('dialogService', DialogService)
  .service('loginService', LoginService)
  .service('signUpService', SignUpService)
  .directive('shHeader', HeaderDirective)
  .directive('shFooter', FooterDirective)
  .directive('shDialogClose', DialogCloseDirective)
  .directive('shDialogBg', DialogBgDirective);
