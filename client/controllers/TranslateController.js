(function() {
    'use strict';

    angular.module('eHealth.config')
    .controller('languageSwitchCtrl', ['$scope','$rootScope','$translate', function($scope, $rootScope, $translate) {
        $scope.changeLanguage = function(keylang) {
            $translate.use(keylang);
        };

        $rootScope.$on('$translateChangeSuccess', function(event,data){
            var language = data.language;
            $rootScope.lang = language;
        });

    }]);
})();
