/**
 * Created by daniel on 30.06.16.
 */
import {ZavistController} from "../../core/base.controller.class";

export function BusinessTaxYear () {

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/businessTaxYear/businessTaxYear.html',
    scope: true,
    controller: BusinessTaxYearController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive
}

class BusinessTaxYearController extends ZavistController {
  constructor ($rootScope, $log, moment, defaultConfigService) {
    'ngInject';
    super($rootScope, $log);

    let currentYear = moment().year();
    this.dataYears = [];
    for(let i = currentYear; i >= defaultConfigService.getMinDataYear(); i--){
      this.dataYears.push(i);
    }
  }

  getDataYears () {
    return this.dataYears;
  }
}
