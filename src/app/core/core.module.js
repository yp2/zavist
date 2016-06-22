/* global moment:false */

import { config } from './core.config';
import { routerConfig } from './core.route';
import { runBlock } from './core.run';
import zavistData from '../data/data.module';
import {InsuranceTableDirective} from '../insurance/insuranceTable/insurance.table.directive'
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
  'ngStorage',
  zavistData
])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .directive('insuranceTable', InsuranceTableDirective);
  // .controller('MainController', MainController);
