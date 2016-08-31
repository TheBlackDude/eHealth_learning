(function() {
    'use strict';

    angular.module('eHealth', [
        'eHealth.home',
        'eHealth.config',
        'eHealth.routes'
    ]);

    angular.module('eHealth.home', []);
    angular.module('eHealth.config', []);
    angular.module('eHealth.routes', ['ngRoute']);

})();

(function() {
    'use strict';

    angular.module('eHealth.config')
    .config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }])
    .run(['$http', function($http){
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }]);

})();

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


(function() {
    'use strict';

    angular.module('eHealth.home')
    .controller('HomeCtrl', ['$scope', function($scope){
        var vm = this;
        vm.greet = 'Welcome to eHealth-Africa Learning';

    }]);

})();
