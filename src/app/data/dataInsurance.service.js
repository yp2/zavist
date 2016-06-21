/**
 * Created by daniel on 21.06.16.
 */
import insuranceData from './dataSources/insurance.source'

export class DataInsuranceService {
  constructor ($log, moment) {
    'ngInject';

    this.$log = $log;
    this.currentYear = moment().year();
  }

  getInsuranceByYear(year=this.currentYear) {
    this.$log.debug('a', year, insuranceData)
  }
}
