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
