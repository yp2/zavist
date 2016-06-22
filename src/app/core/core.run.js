export function runBlock ($log, $localStorage, $rootScope) {
  'ngInject';

  $log.debug('runBlock end');

  // setting $storage as $localStorage
  $rootScope.$storage = $localStorage;
}
