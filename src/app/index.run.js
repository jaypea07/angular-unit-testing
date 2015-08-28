(function() {
  'use strict';

  angular
    .module('unitTests')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
