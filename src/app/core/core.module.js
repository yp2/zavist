/* global moment:false */

import { config } from './core.config';
import { routerConfig } from './core.route';
import { runBlock } from './core.run';
import zavistData from '../data/data.module';
// import { MainController } from 'main-old/main.controller';

angular.module('zavist', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ui.router',
  'toastr',
  zavistData
])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock);
  // .controller('MainController', MainController);
