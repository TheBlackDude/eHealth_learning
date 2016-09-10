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
                Snackbar.show('<p class="snackbar">Project Successfully Added</p>');
            }).error(function(err){
                Project.allErrors.push(err);
                Snackbar.error(err);
            });

        }

        return Project;

    }]);

})();
