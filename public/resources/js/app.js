var app = angular.module('hoodpopes', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'resources/html/home.html',
            controller: 'homeCtrl'
        })
        .when('/videos', {
            templateUrl: 'resources/html/videos.html',
            controller: 'videosCtrl'
        })
        .when('/deckbuilder', {
            templateUrl: 'resources/html/deckbuilder.html',
            controller: 'deckCtrl'
        })
        .when('/calendar', {
            templateUrl: 'resources/html/calendar.html',
            controller: 'calendarCtrl'
        })
        .when('/coc', {
            templateUrl: 'resources/html/coc.html',
            controller: 'cocCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);