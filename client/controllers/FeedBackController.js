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
