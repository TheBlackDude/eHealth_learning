(function() {
    'use strict';

    angular.module('eHealth.home')
    .controller('HomeCtrl', ['$scope', function($scope){
        var vm = this;
        vm.greet = 'Welcome to eHealth-Africa Learning';

    }]);

})();
