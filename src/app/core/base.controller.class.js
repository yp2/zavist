/**
 * Created by daniel on 29.06.16.
 */
export class ZavistController {
  constructor ($rootScope, $log) {

    this.storage = $rootScope.$storage;
    this.$rootScope = $rootScope;
    this.$log = $log;
    
  }
  emitCalc () {
    this.$rootScope.$broadcast('calc');
  }
  emitReloadData () {
    this.$rootScope.$broadcast('reloadData');
  }

}
