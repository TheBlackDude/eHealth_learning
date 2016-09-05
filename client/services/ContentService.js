(function() {
    'use strict';

    angular.module('eHealth.services')
    .factory('Content', ['$http', function($http) {
        var Content = {
                allContent: [],
                allErrors: [],
                getContent: getContent
        }

        function getContent() {
            return $http.get('/api/contents').success(function(data){
                angular.copy(data, Content.allContent);
            }).error(function(err){
                angular.copy(err, Content.allErrors);
            });
        }

        return Content;

    }]);
            
})();
