(function() {
    'use strict';

    angular.module('eHealth.routes')
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: '/static/views/home.html'
            })
            .otherwise('/');

    }]);

})();
