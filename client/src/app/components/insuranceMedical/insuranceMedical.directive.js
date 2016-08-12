/**
 * Created by daniel on 05.07.16.
 */
import { ZavistController } from '../../core/base.controller.class';

export function InsuranceMedicalDirective() {
  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/insuranceMedical/insuranceMedical.html',
    scope: true,
    controller: InsuranceMedicalController,
    controllerAs: 'vm',
    bindToController: true

  };

  return directive
}

class InsuranceMedicalController extends ZavistController {
  constructor ($rootScope, $log) {
    'ngInject';

    super($rootScope, $log)
  }
}
