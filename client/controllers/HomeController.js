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
