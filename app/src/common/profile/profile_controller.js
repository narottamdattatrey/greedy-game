// (function(){
'use strict';
/**
 * This controller is used for authentication
 */
angular.module('myApp').controller('ProfileController', function ($scope, $mdDialog) {
  $scope.subDashboardData = [{
            label: 'team',
            data: 99
        },
        {
            label: 'team',
            data: 99
        },
        {
            label: 'team',
            data: 99
        }, {
            label: 'team',
            data: 99
        },
        {
            label: 'team',
            data: 99
        },
        {
            label: 'team',
            data: 99
        }
    ];
    $scope.userList = [{
            status: 'active',
            data: 99
        },
        {
            status: 'inavtive',
            data: 99
        }
    ];

    $scope.employeeTable = ['image', 'id', 'name', 'contact', 'email', 'status', 'team', 'deviceVersion', 'appVersion', 'action'];

    $scope.employeeData = [{
            image: '',
            id: 99,
            name: 'rohit',
            contact: '+9199999999',
            email: 'dfg@fgh.com',
            status: 'active',
            team: 'a',
            deviceVersion: 'android',
            appVersion: '9t77t78y',
            action: 'true'
        },
        {
            image: '',
            id: 99,
            name: 'rohit',
            contact: '+9199999999',
            email: 'dfg@fgh.com',
            status: 'active',
            team: 'a',
            deviceVersion: 'android',
            appVersion: 'v2',
            action: 'true'
        },

        {
            image: '',
            id: 99,
            name: 'rohit',
            contact: '+9199999999',
            email: 'dfg@fgh.com',
            status: 'active',
            team: 'a',
            deviceVersion: 'android',
            appVersion: 'v2',
            action: 'true'
        },
        {
            image: '',
            id: 99,
            name: 'rohit',
            contact: '+9199999999',
            email: 'dfg@fgh.com',
            status: 'active',
            team: 'a',
            deviceVersion: 'android',
            appVersion: 'v2',
            action: 'true'
        },
        {
            image: '',
            id: 99,
            name: 'rohit',
            contact: '+9199999999',
            email: 'dfg@fgh.com',
            status: 'active',
            team: 'a',
            deviceVersion: 'android',
            appVersion: 'v2',
            action: 'true'
        },
        {
            image: '',
            id: 99,
            name: 'rohit',
            contact: '+9199999999',
            email: 'dfg@fgh.com',
            status: 'active',
            team: 'a',
            deviceVersion: 'android',
            appVersion: 'v2',
            action: 'true'
        },
        {
            image: '',
            id: 99,
            name: 'rohit',
            contact: '+9199999999',
            email: 'dfg@fgh.com',
            status: 'active',
            team: 'a',
            deviceVersion: 'android',
            appVersion: 'v2',
            action: 'true'
        },
        {
            image: '',
            id: 99,
            name: 'rohit',
            contact: '+9199999999',
            email: 'dfg@fgh.com',
            status: 'active',
            team: 'a',
            deviceVersion: 'android',
            appVersion: 'v2',
            action: 'true'
        },

    ];
    $scope.totalIndex = ['1','2', '3','4'];

    // Add user dialog controller
    $scope.addNewUser = function(ev) {
        $mdDialog.show({
                templateUrl: 'src/common/profile/adduser.html',
                parent: angular.element(document.body),
                controller: 'ProfileController',
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    }
})
// })