/**
 * Created by daniel on 29.06.16.
 */
import { ZavistController } from '../../core/base.controller.class';
// class ZavistController {
//   constructor ($scope) {
//     'ngInject';
//
//     this.storage = $scope.$storage;
//     this.$scope = $scope;
//
//     this.activate();
//   }
// }
export function BusinessTypeDirective() {

  let directive = {
    restrict: "E",
    templateUrl: 'app/components/businessType/businessType.html',
    scope: true,
    controller: BusinessTypeController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive
}

class BusinessTypeController extends ZavistController {
  constructor ($rootScope, $log) {
    'ngInject';
    super($rootScope, $log);
  }

  activate () {

    this.$log.log('aaaa', this.storage);
  }

  reload () {
    this.$rootScope.$broadcast('reloadData');
  }
}

