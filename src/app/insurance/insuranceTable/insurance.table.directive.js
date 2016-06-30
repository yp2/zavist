/**
 * Created by daniel on 22.06.16.
 */
import { ZavistController } from '../../core/base.controller.class'

export function InsuranceTableDirective() {
  'ngInject';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'app/insurance/insuranceTable/insurance.table.html',
    controller: InsuranceTableController,
    controllerAs: 'vm',
    bindToController: true
  };

}

class InsuranceTableController extends ZavistController {
  constructor ($rootScope, $log) {
    'ngInject';

    super($rootScope, $log);
    this.activate();
  }

  activate () {
    this.$log.debug('aa');
    var self = this;
    this.$rootScope.$on('reloadData', function () {
      self.$log.log('data reloaded')
    })
  }

}
