export function runBlock ($log, $localStorage, $rootScope, defaultConfigService) {
  'ngInject';
  var appConfig = defaultConfigService.getConfig();

  // setting $storage as $localStorage
  $rootScope.$storage = $localStorage;

  $log.debug('pre', $rootScope.$storage, defaultConfigService.getConfig());
  angular.forEach(appConfig, function (value, key) {
    if (angular.isUndefined($rootScope.$storage[key])) {
      $rootScope.$storage[key] = value;
    }
  });
  $log.debug('after', $rootScope.$storage);
  $log.debug('runBlock core end');
}
