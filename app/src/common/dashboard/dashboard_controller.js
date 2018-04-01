// (function(){
    'use strict';
    /**
     * Using google map for paths
     */
    angular.module('myApp').controller('DashboardController', function ($scope, $mdDialog, $mdSidenav, $interval) {
        // $scope.initMap = function() {
        //     console.log('one');
        //     var map = new google.maps.Map(document.getElementById('map'), {
        //       zoom: 3,
        //       center: {lat: 0, lng: -180},
        //       mapTypeId: 'terrain'
        //     });
    
        //     var flightPlanCoordinates = [
        //       {lat: 37.772, lng: -122.214},
        //       {lat: 21.291, lng: -157.821},
        //       {lat: -18.142, lng: 178.431},
        //       {lat: -27.467, lng: 153.027}
        //     ];
        //     var flightPath = new google.maps.Polyline({
        //       path: flightPlanCoordinates,
        //       geodesic: true,
        //       strokeColor: '#FF0000',
        //       strokeOpacity: 1.0,
        //       strokeWeight: 2
        //     });
    
        //     flightPath.setMap(map);
        //   }
        //   $scope.initMap();

        $scope.formData = [
            {
                label:'Form 1',
                data:0
            },
            {
                label:'Form 2',
                data:0
            },
            {
                label:'Form 3',
                data:0
            }
        ];
    })