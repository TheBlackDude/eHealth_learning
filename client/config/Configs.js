(function() {
    'use strict';

    angular.module('eHealth.config')
    .config(['$locationProvider','$translateProvider',
      function($locationProvider, $translateProvider){
        // remove the hash
        $locationProvider.html5Mode(true);

        // setup translation
        $translateProvider
          .useStaticFilesLoader({
             prefix: '/static/translations/',
             suffix: '.json'
          })
          .preferredLanguage('en')
          .useMissingTranslationHandlerLog();
    }])
    .run(['$http', function($http){
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }]);

})();
