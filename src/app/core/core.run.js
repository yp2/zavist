export function runBlock ($log, dataInsuranceService) {
  'ngInject';
  dataInsuranceService.getInsuranceByYear();
  $log.debug('runBlock end');
}
