(function() {
    'use strict';

    angular.module('eHealth', [
        'eHealth.home',
        'eHealth.config',
        'eHealth.routes',
        'eHealth.controllers'
    ]);

    angular.module('eHealth.home', []);
    angular.module('eHealth.config', []);
    angular.module('eHealth.routes', ['ngRoute']);
    angular.module('eHealth.controllers', []);

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
            .when('/lecture', {
                controller: 'LectureCtrl',
                controllerAs: 'vm',
                templateUrl: '/static/views/lectures.html'
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

(function() {
    'use strict';

    angular.module('eHealth.controllers')
    .controller('LectureCtrl', ['$scope', function($scope) {
        var vm = this;

        vm.greet = 'this is the lectures page.';

    }]);

})();
