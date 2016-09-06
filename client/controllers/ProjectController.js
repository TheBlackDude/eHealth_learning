(function() {
    'use strict';

    angular.module('eHealth.controllers')
    .controller('ProjectCtrl', ['$scope', 'Project', function($scope, Project) {
        var vm = this;
        vm.info = 'Projects Built By The Academy Attendies';

        Project.getProjects();

        vm.projects = Project.allProjects;
    }]);

})();
