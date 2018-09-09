var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/feed", {
        templateUrl : "feed.html"
    })
    .when("/my-dirty-code", {
        templateUrl : "my-dirty-code.html"
    })
    .when("/my-contributions", {
        templateUrl : "my-contributions.html"
    });
});