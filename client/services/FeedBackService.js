(function() {
    'use strict';

    angular.module('eHealth.services')
    .factory('FeedBack', ['$http', function($http) {
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
            }).error(function(err){
                FeedBack.allErrors.push(err);
            });
        }

        return FeedBack;

    }]);

})();
