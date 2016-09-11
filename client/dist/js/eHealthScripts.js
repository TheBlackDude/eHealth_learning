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
             prefix: '/translations/',
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

(function() {
    'use strict';

    angular.module('eHealth.routes')
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
           /* .when('/', {
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: '/static/views/home.html'
            })*/
            .when('/', {
                controller: 'LectureCtrl',
                controllerAs: 'vm',
                templateUrl: '/static/views/lectures.html'
            })
            .when('/info', {
                controller: 'InfoCtrl',
                controllerAs: 'vm',
                templateUrl: '/static/views/info.html'
            })
            .when('/projects', {
                controller: 'ProjectCtrl',
                controllerAs: 'vm',
                templateUrl: '/static/views/projects.html',
            })
            .when('/resources', {
                controller: 'ResourceCtrl',
                controllerAs: 'vm',
                templateUrl: '/static/views/resources.html'
            })
            .when('/feedback', {
                controller: 'FeedBackCtrl',
                controllerAs: 'vm',
                templateUrl: '/static/views/feedback.html'
            })
            .otherwise('/');

    }]);

})();

(function($, _) {
    'use strict';

    angular.module('eHealth.utils')
    .factory('Snackbar', [function() {
        var Snackbar = {
            error: error,
            show: show
        }

        function _snackbar(content, options) {
            options = _.extend({timeout: 3000}, options);
            options.content = content; 

            $.snackbar(options);
        }

        function error(content, options) {
            _snackbar('Error:' + content, options)
        }

        function show(content, options) {
            _snackbar(content, options);
        }

        return Snackbar;

    }]);

})($, _);

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

    angular.module('eHealth.services')
    .factory('FeedBack', ['$http','Snackbar', function($http, Snackbar) {
        var FeedBack = {
            allFeedbacks: [],
            allErrors: [],
            getFeedbacks: getFeedbacks,
            createFeedbacks: createFeedbacks
        }

        function getFeedbacks() {
            return $http.get('/api/feedbacks').success(function(data){
                angular.copy(data, FeedBack.allFeedbacks);
            }).error(function(err){
                angular.copy(err, FeedBack.allErrors);
            });
        }

        function createFeedbacks(name,email,notes) {
            return $http.post('/api/feedbacks/', {
                name: name,
                email: email,
                notes: notes
            }).success(function(data){
                FeedBack.allFeedbacks.push(data);
                Snackbar.show('Thanks for Your FeedBack!');
            }).error(function(err){
                FeedBack.allErrors.push(err);
                Snackbar.error(err);
            });
        }

        return FeedBack;

    }]);

})();

(function() {
    'use strict';

    angular.module('eHealth.services')
    .factory('Project', ['$http','Snackbar', function($http,Snackbar) {
        var Project = {
            allProjects: [],
            allErrors: [],
            getProjects: getProjects,
            createProject: createProject
        }

        function getProjects() {
            return $http.get('/api/projects').success(function(data){
                angular.copy(data, Project.allProjects);
            }).error(function(err){
                angular.copy(err, Project.allErrors);
            });

        }

        function createProject(authors,name,description,repo) {
            return $http.post('/api/projects/', {
                authors: authors,
                name: name,
                description: description,
                repo: repo
            }).success(function(data){
                Project.allProjects.push(data);
                Snackbar.show('Project Successfully Added');
            }).error(function(err){
                Project.allErrors.push(err);
                Snackbar.error(err);
            });

        }

        return Project;

    }]);

})();

(function() {
    'use strict';

    angular.module('eHealth.controllers')
    .controller('FeedBackCtrl', ['$scope', 'FeedBack', function($scope,FeedBack) {
        var vm = this;
        vm.head = 'Your FeedBack Is Important To Us.';
        
        FeedBack.getFeedbacks();
        vm.feedbacks = FeedBack.allFeedbacks;

        vm.CreateFeedBack = function(){
            FeedBack.createFeedbacks(vm.name,vm.email,vm.notes);

            vm.name = '';
            vm.email = '';
            vm.notes = '';
        }


    }]);

})();

(function() {
    'use strict';

    angular.module('eHealth.home')
    .controller('HomeCtrl', ['$scope', 'Content', function($scope, Content){
        var vm = this;
        vm.greet = 'Welcome to eHealth-Africa Learning';

       // Content.getContent();

       // vm.contents = Content.allContent;

    }]);

})();

(function() {
    'use strict';

    angular.module('eHealth.controllers')
    .controller('InfoCtrl', ['$scope', function($scope) {
        var vm = this;
        
        vm.greet = 'this is the Academy info page'

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

(function() {
    'use strict';

    angular.module('eHealth.controllers')
    .controller('ProjectCtrl', ['$scope', 'Project','ngDialog',
                 function($scope, Project, ngDialog) {
        var vm = this;
        vm.info = 'Projects Built By The Academy Attendies';

        Project.getProjects();

        vm.projects = Project.allProjects;

        vm.addProject = function() {
            ngDialog.open({
                template: '/static/views/addproject.html',
                className: 'ngdialog-theme-default',
                controller: ['$scope','Project',
                             function($scope, Project){
                    var vm = this;

                    vm.createProject = function() {
                        Project.createProject(vm.authors,vm.name,vm.description,vm.repo);
                        $scope.closeThisDialog();
                    };
                }],
                controllerAs: 'vm'
            });

        }
    }]);

})();

(function() {
    'use strict';

    angular.module('eHealth.controllers')
    .controller('ResourceCtrl', ['$scope', function($scope) {
        var vm = this;
        vm.head = 'More Resources';

    }]);

})();
