(function() {
    'use strict';

    angular.module('components.dashboard', [])
    .config(function($stateProvider){
        $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'components/dashboard/dashboard.html',
        });
    });
})();