(function() {
    'use strict';

    angular.module('eHealth', [
        'eHealth.home',
        'eHealth.config',
        'eHealth.routes',
        'eHealth.services',
        'eHealth.controllers'
    ]);

    angular.module('eHealth.home', []);
    angular.module('eHealth.config', []);
    angular.module('eHealth.routes', ['ngRoute']);
    angular.module('eHealth.services', []);
    angular.module('eHealth.controllers', []);

})();
