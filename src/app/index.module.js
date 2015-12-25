/* global */

// config
import { config } from './index.config';
import { routerConfig } from './index.route';
import { constants } from './index.constants';
import { runBlock } from './index.run';
import { lodashProvider } from '../app/components/utils/lodash.provider';
import { encryptFactory } from '../app/components/utils/encrypt.factory';

// controllers
import { MainController } from './main/main.controller';
import { LoginController } from '../app/components/login/login.controller';
import { SignUpController } from '../app/components/sign-up/sign-up.controller';
import { ForgotPasswordController } from '../app/components/login/forgot-password/forgot-password.controller';
import { PostsController } from '../app/posts/posts.controller.js'

// services
import { HelperService } from '../app/components/utils/helper.service';
import { DialogService } from '../app/components/dialog/dialog.service';
import { LoginService } from '../app/components/login/login.service';
import { SignUpService } from '../app/components/sign-up/sign-up.service';

// directives
import { HeaderDirective } from '../app/components/header/header.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';
import { DialogBgDirective } from '../app/components/dialog/dialog-bg.directive';
import { DialogCloseDirective } from '../app/components/dialog/dialog-close.directive';

angular.module('soopaheroClient',
  ['ngAnimate',
    'ngCookies',
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
  .provider('_', lodashProvider)
  .factory('encrypt', encryptFactory)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .controller('SignUpController', SignUpController)
  .controller('ForgotPasswordController', ForgotPasswordController)
  .controller('PostsController', PostsController)
  .service('helperService', HelperService)
  .service('dialogService', DialogService)
  .service('loginService', LoginService)
  .service('signUpService', SignUpService)
  .directive('shHeader', HeaderDirective)
  .directive('shFooter', FooterDirective)
  .directive('shDialogBg', DialogBgDirective)
  .directive('shDialogClose', DialogCloseDirective);
