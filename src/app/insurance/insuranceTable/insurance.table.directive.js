/**
 * Created by daniel on 22.06.16.
 */
export function InsuranceTableDirective() {
  'ngInject';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'app/insurance/insuranceTable/insurance.table.html'
  };

}
