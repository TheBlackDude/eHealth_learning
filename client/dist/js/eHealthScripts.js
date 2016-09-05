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

    angular.module('eHealth.services')
    .factory('Content', ['$http', function($http) {
        var Content = {
                allContent: [],
                allErrors: [],
                getContent: getContent
        }

        function getContent() {
            return $http.get('/api/contents').success(function(data){
                angular.copy(data, Content.allContent);
            }).error(function(err){
                angular.copy(err, Content.allErrors);
            });
        }

        return Content;

    }]);
            
})();

(function() {
    'use strict';

    angular.module('eHealth.home')
    .controller('HomeCtrl', ['$scope', 'Content', function($scope, Content){
        var vm = this;
        vm.greet = 'Welcome to eHealth-Africa Learning';

        Content.getContent();

        vm.contents = Content.allContent;

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
