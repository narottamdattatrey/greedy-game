"use strict";
angular.module("myApp.version", ["myApp.version.interpolate-filter", "myApp.version.version-directive"]).value("version", "0.1"), angular.module("myApp.version.version-directive", []).directive("appVersion", ["version", function (e) {
    return function (r, n, i) {
        n.text(e)
    }
}]), angular.module("myApp.version.interpolate-filter", []).filter("interpolate", ["version", function (e) {
    return function (r) {
        return String(r).replace(/\%VERSION\%/gm, e)
    }
}]), angular.module("myApp.view2", ["ngRoute"]).config(["$routeProvider", function (e) {
    e.when("/view2", {
        templateUrl: "src/main/main.html",
        controller: "View2Ctrl"
    })
}]).controller("View2Ctrl", [function () {}]), angular.module("myApp.view1", ["ngRoute"]).config(["$routeProvider", function (e) {
    e.when("/view1", {
        templateUrl: "src/header/header.html",
        controller: "View1Ctrl"
    })
}]).controller("View1Ctrl", [function () {}]), angular.module("myApp", ["ngRoute", "ngAria", "ngMessages", "ngAnimate", "ngMaterial", "myApp.version"]).config(["$locationProvider", "$routeProvider", function (e, r) {
    e.hashPrefix("!"), r.otherwise({
        redirectTo: "/view1"
    })
}]), angular.module("myApp").directive("navbar", function () {
    return {
        templateUrl: "src/common/navbar.html"
    }
});