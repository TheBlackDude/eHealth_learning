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
