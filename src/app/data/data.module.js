/**
 * Created by daniel on 19.06.16.
 */

import {runBlock} from './data.run';
import {DataInsuranceService} from './dataInsurance.service';


export default angular
  .module('zavistData', [])
  .run(runBlock)
  .service('dataInsuranceService', DataInsuranceService)
  .name;
