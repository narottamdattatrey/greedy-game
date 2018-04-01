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
        'myApp.version',
        'ui.router',
        'dynform'
    ]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        /**
         * @param $locationProvider.html5Mode has used for remove hashbang from url
         * enabled: true will remove hash from url
         */
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'src/common/dashboard/dashboard.html',
            controller: 'DashboardController'
        });
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'src/common/login/login.html',
            controller: 'LoginController'
        });
        $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'src/common/register/register.html',
            controller: 'RegistrationController'
        });
        $stateProvider.state('form', {
            url: '/visionform',
            templateUrl: 'src/common/visionform/visionform.html',
            controller: 'VisionformController'
        });
        $stateProvider.state('library', {
            url: '/profile',
            templateUrl: 'src/common/library/library.html',
            controller: 'LibraryController'
        });
        $stateProvider.state('contacts', {
            url: '/contact',
            templateUrl: 'src/common/contact/contact.html',
            controller: 'ContactController'
        });

        $urlRouterProvider.otherwise('/');
    }]).config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('teal');
    }).constant('jQuery', window.jQuery);
