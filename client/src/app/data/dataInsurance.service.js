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

  getInsurance(taxYear, businessType) {
    this.$log.debug('a', taxYear, businessType, insuranceData[taxYear][businessType]);

    let previousYear = insuranceData[taxYear-1][businessType].pop();
    previousYear.month = '12/' + (taxYear - 1);
    let thisYear = insuranceData[taxYear][businessType];

    thisYear.pop();
    thisYear.unshift(previousYear);
    return thisYear
  }
  
}
