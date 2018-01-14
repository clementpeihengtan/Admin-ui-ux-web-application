(function() {
    'use strict';

    var chart = angular.module('components.charts', [])
    .config(function($stateProvider){
        $stateProvider
        .state('charts', {
            url: '/charts',
            templateUrl: 'components/charts/charts.html',
        });
    });
    var datalist = [
        {
            "name" : "Node 1",
            "mark" : 80,
            "average" : 6,
            "capacity" : 70
        },
        {
            "name" : "Node 2",
            "mark" : 70,
            "average" : 5,
            "capacity" : 80
        },
        {
            "name" : "Node 4",
            "mark" : 60,
            "average" : 9,
            "capacity" : 20
        },
        {
            "name" : "Node 5",
            "mark" : 20,
            "average" : 5,
            "capacity" : 30
        }
        ];

    chart.factory('Data', function() {
        var Data = {};

        Data.all = function() {
            return datalist;
        }
        return Data
    })
    chart.controller('allshares', function($scope){
        $scope.shares = datalist;
    });
})();

$(document).ready(function() {
    var ctx = document.getElementById("mychart");
    var canvas = ctx.getContext("2d");

    var myChart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: [5, 10, 15, 20, 25, 30, 40, 45, 50],
            datasets: [{ 
                data: [10, 5, 13, 20, 30, 40, 22, 35, 5, 17],
                label: "Most view",
                borderColor: "#3e95cd",
                fill: false
            }
            ]
        },
        options: {
            title: {
            display: true,
            text: 'Most Viewed Data'
            }
        }
    });
    var parent = document.getElementById("myparent");
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
});