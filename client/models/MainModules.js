(function() {
    'use strict';

    angular.module('eHealth', [
        'eHealth.home',
        'eHealth.config',
        'eHealth.routes',
        'eHealth.services',
        'eHealth.controllers',
        'eHealth.utils'
    ]);

    angular.module('eHealth.home', []);
    angular.module('eHealth.config', ['pascalprecht.translate']);
    angular.module('eHealth.routes', ['ngRoute']);
    angular.module('eHealth.services', []);
    angular.module('eHealth.controllers', ['ngDialog']);
    angular.module('eHealth.utils', []);

})();
