(function() {
    'use strict';

    angular.module('eHealth.services')
    .factory('Project', ['$http', function($http) {
        var Project = {
            allProjects: [],
            allErrors: [],
            getProjects: getProjects
        }

        function getProjects() {
            return $http.get('/api/projects').success(function(data){
                angular.copy(data, Project.allProjects);
            }).error(function(err){
                angular.copy(err, Project.allErrors);
            });

        }

        return Project;

    }]);

})();
