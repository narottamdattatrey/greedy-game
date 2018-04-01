// (function(){
'use strict';
/**
 * This controller is used for authentication
 */
angular.module('myApp').controller('LoginController', function ($scope, $mdDialog, $mdSidenav) {
    console.log('hi');
    // $scope.toggleLeft = buildToggler('left');
    // $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }

    $scope.dashboards = [
        {
            icon:"dashboard",
            label: 'Dashboard'
        },
        {
            icon:"person",
            label: 'user'
        },
        {
            icon:"format_align_justify",
            label: 'form'
        },
        {
            icon:"insert_chart",
            label: 'report'
        },
        {
            icon:"settings",
            label: 'setting'
        },
        {
            icon:"power_settings_new",
            label: 'logout'
        },
    ]
})
// })