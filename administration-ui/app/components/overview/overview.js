(function() {
    'use strict';

    angular.module('components.overview', [])
    .config(function($stateProvider){
        $stateProvider
        .state('overview', {
            url: '/overview',
            templateUrl: 'components/overview/overview.html',
        });
    });
})();

$(document).ready(function() {
    var ctx = document.getElementById("chart");
    var canvas = ctx.getContext("2d");

    var myChart = new Chart(canvas, {
        type: 'bar',
        data: {
            responsive: false,
            labels: ["Node 1", "Node 2", "Node 3", "Node 4", "Node 5"],
            datasets: [{
                label: 'Number of Container',
                height: 300,
                width: 400,
                data: [1, 3, 2, 3, 4],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRation: false,
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var parent = document.getElementById("parent");
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
});
