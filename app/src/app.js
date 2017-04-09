'use strict';
/**
*require modules injected 
*/
angular.module('myApp', [
        'ngRoute',
        'ngAria',
        'ngAnimate',
        'ngMaterial',
        'ngMessages',
        'ngResource',
        'myApp.version'
    ])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
