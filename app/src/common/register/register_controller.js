(function () {
    'use strict';
    /**
     * @param user is registered usr object
     */
    angular.module('myApp').controller('RegistrationController', RegistrationController);
    /** @ngInject */
    function RegistrationController($scope, RegistrationService) {
        $scope.user = {};
        $scope.register = function () {
            console.log('register', $scope.user);
            var fd = new FormData();
            fd.append('firstName', $scope.user.firstName);
            fd.append('lastName', $scope.user.lastName);
            fd.append('username', $scope.user.username);
            fd.append('countryCode', $scope.user.countryCode);
            fd.append('mobile', $scope.user.mobile);
            fd.append('email', $scope.user.email);
            fd.append('imei', $scope.user.imei);
            fd.append('designation', $scope.user.designation);
            fd.append('zone', $scope.user.zone);
            fd.append('manager', $scope.user.manager);
            fd.append('company', $scope.user.company);
            fd.append('password', $scope.user.password);
            fd.append('deviceToken', $scope.user.deviceToken);
            fd.append('deviceType', $scope.user.deviceType);

            RegistrationService.registrationEmployee({
                fd
            }, function(response) {
                $scope.data = response.results;
                console.log(response);
            }, function(error) {
                console.log(eror);
            });
        }
       
    }
})();