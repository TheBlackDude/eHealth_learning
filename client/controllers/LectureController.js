(function() {
    'use strict';

    angular.module('eHealth.controllers')
    .controller('LectureCtrl', ['$scope','ngDialog','Authentication',
     function($scope, ngDialog, Authentication) {
        var vm = this;

       vm.IsAuthenticated = Authentication.isAuthenticated;

       vm.Logout = Authentication.logout;

        // Register
        vm.register = function() {
            ngDialog.open({
                template: '/static/views/signup.html',
                className: 'ngdialog-theme-default',
                controller: ['$scope','Authentication',
                             function($scope, Authentication) {
                    var vm = this;

                    vm.signUp = signUp;

                    function signUp(){

                        Authentication.register(vm.name,vm.email,vm.password,vm.confirm_pass);
                        $scope.closeThisDialog();
                    };
                }],
                controllerAs: 'vm' 
            });
        }

        // Login
        vm.login = function() {
            ngDialog.open({
                template: '/static/views/login.html',
                className: 'ngdialog-theme-default',
                controller: ['$scope', 'Authentication',
                            function($scope, Authentication) {
                    var vm = this;

                    vm.signIn = function() {
                        Authentication.login(vm.email,vm.password);

                        $scope.closeThisDialog();
                    };
                }],
                controllerAs: 'vm'
            });
        }

        // AddLecture
        vm.addLecture = function() {
            ngDialog.open({
                template: '/static/views/addlecture.html',
                className: 'ngdialog-theme-default',
                controller: ['$scope', function($scope) {
                     var vm = this;

                     vm.createLecture = function() {
                         //TODO;
                         
                         $scope.closeThisDialog();
                     };
                }],
                controllerAs: 'vm'
            });
        }

    }]);

})();
