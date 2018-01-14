(function() {
    'use strict';

    angular.module('components.storage', [])
    .config(function($stateProvider){
        $stateProvider
        .state('storage', {
            url: '/storage',
            templateUrl: 'components/storage/storage.html',
        });
    });
})();