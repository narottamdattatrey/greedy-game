// (function(){
'use strict';
/**
 * This controller is used for authentication
 */
angular.module('myApp').controller('NavbarController', function ($scope, $mdDialog, $mdSidenav, $interval, $state) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }

    // clock time
    var tick = function () {
        $scope.currentDate = new Date();
    }
    $interval(tick, 1000);

    $scope.dashboards = [{
            icon: "dashboard",
            label: 'dashboard'
        },
        {
            icon: "person",
            label: 'user'
        },
        {
            icon: "format_align_justify",
            label: 'form'
        },
        {
            icon: "insert_chart",
            label: 'report'
        },
        {
            icon: "settings",
            label: 'setting'
        },
        {
            icon: "power_settings_new",
            label: 'logout'
        },
    ];
    $scope.goToPage = function(page){
        console.log('page', page);
        $state.go(page);
    }

})