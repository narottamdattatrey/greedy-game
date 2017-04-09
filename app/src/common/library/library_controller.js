'use strict';

/**
 * $mdDialog used for dialog
 * genres-service is used for common service to get data from server.
 */

angular.module('myApp').controller('LibraryController', function($scope, GenresService, $mdDialog) {
    $scope.library = function() {
        GenresService.getAll(function(response) {
            $scope.data = response.results;
        });
    };

    // binding data with view
    $scope.playlistSearch;
    $scope.getDetailsByTitle = function() {
        if (event.which === 13) {
            var title = $scope.playlistSearchTitle;
            GenresService.getSingle({
                title: title
            }, function(response) {
                $scope.searchResult = response;
            });
        }
    };

    //Fetching data by id
    $scope.getDetailsByID = function() {
        if (event.which === 13) {
            var id = $scope.playlistSearchId;
            GenresService.getSingleById({
                id
            }, function(response) {
                $scope.searchResult = response;
            });
        }
    };

    // Creating new genres
    $scope.createGenres = function() {
        GenresService.post({
            "name": $scope.name
        }, function(response) {
            $scope.data = response.results;
            $mdDialog.hide();
            console.log(response);
        }, function(error) {
            console.log(eror);
            $mdDialog.hide();
        });
    };

 // dialog controller
    $scope.addNewTrack = function(ev) {
        $mdDialog.show({
                template: '<md-input-container md-no-float>' + '<input type="text" ng-model="name">' +
                    '</md-input-container>' + '<md-button ng-click="createGenres()">Create genres</md-button>',
                parent: angular.element(document.body),
                controller: 'LibraryController',
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
});
