/**
 * Created by daniel on 22.06.16.
 */
import { ZavistController } from '../../core/base.controller.class'

export function InsuranceTableDirective() {
  'ngInject';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'app/insurance/insuranceTable/insuranceTable.html',
    controller: InsuranceTableController,
    controllerAs: 'vm',
    bindToController: true
  };

}

class InsuranceTableController extends ZavistController {
  constructor ($rootScope, $log, dataInsuranceService) {
    'ngInject';

    super($rootScope, $log);
    this.dataInsuranceService = dataInsuranceService;
    this.activate();

  }

  activate () {
    this.$log.debug('aa');
    var self = this;
    this.getInsurance();
    this.$rootScope.$on('reloadData', function () {
      self.$log.log('data reloaded');
      self.getInsurance();
    })
  }

  getInsurance () {
    return this.data = this.dataInsuranceService.getInsurance(this.storage.businessTaxYear, this.storage.businessType);
  }



}
