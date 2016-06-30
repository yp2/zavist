/* global moment:false */

import { config } from './core.config';
import { routerConfig } from './core.route';
import { runBlock } from './core.run';
import zavistData from '../data/data.module';
import {InsuranceTableDirective} from '../insurance/insuranceTable/insurance.table.directive'
import { MainController } from '../main/main.controller'
import { DefaultConfigService } from '../components/defaultConfig/deafultConfig.service'
import { BusinessTypeDirective } from  '../components/businessType/businessType.directive'
import { BusinessTaxYear } from  '../components/businessTaxYear/businessTaxYear.directive'

angular.module('zavist', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ui.router',
  'toastr',
  'ui.bootstrap',
  'ngStorage',
  zavistData
])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('defaultConfigService', DefaultConfigService)
  .directive('insuranceTable', InsuranceTableDirective)
  .directive('businessType', BusinessTypeDirective)
  .directive('businessTaxYear', BusinessTaxYear)
  .controller('MainController', MainController);
