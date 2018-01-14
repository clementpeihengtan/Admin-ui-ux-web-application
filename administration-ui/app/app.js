$(document).ready(function() {
    $('.nav-list').on('click', function(){
        $('a').removeClass('active');
        $(this).addClass('active');
    });
});

(function() {
'use strict';

angular.module('admin', [
    'ui.router',
    'components.charts',
    'components.dashboard',
    'components.storage',
    'components.overview'
])
.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/overview');
});
})();