(function() {
    'use strict';

    angular.module('eHealth.authentication')
    .factory('Authentication', ['$http', '$cookies', 'Snackbar',
     function($http, $cookies, Snackbar) {
        
        var Authentication = {
            register: register,
            login: login,
            logout: logout,
            getAuthenticatedAccount: getAuthenticatedAccount,
            setAuthenticatedAccount: setAuthenticatedAccount,
            isAuthenticated: isAuthenticated,
            unAuthenticate: unAuthenticate
        }

        function register(name,email,password) {
            var Email = email;
            var Password = password;
            return $http.post('/api/accounts/', {
                name: name,
                email: email,
                password: password
            }).success(function(data){
                Snackbar.show('Thanks for Signing Up');
                Authentication.login(Email,Password);
            }).error(function(err) {
                Snackbar.error(err);
            });
        }

        function login(email, password) {
            return $http.post('/api/auth/login/', {
                email: email,
                password: password
            }).success(function(data) {
                Authentication.setAuthenticatedAccount(data);
            }).error(function(err) {
                Snackbar.error(err);
            });
        }

        function logout() {
            return $http.post('/api/auth/logout/')
                .success(function(data) {
                   Authentication.unAuthenticate();
                }).error(function(err) {
                   Snackbar.error(err);
                });
        }

        function getAuthenticatedAccount() {
            if (!$cookies.authenticatedAccount) {
                return;
            }
            return JSON.parse($cookies.authenticatedAccount);
        }

        function setAuthenticatedAccount(account) {
            $cookies.authenticatedAccount = JSON.stringify(account);
        }

        function isAuthenticated() {
            return !!$cookies.authenticatedAccount;
        }

        function unAuthenticate() {
            delete $cookies.authenticatedAccount;
        }

        return Authentication;
    }]);

})();
