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
