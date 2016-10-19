var app = angular.module('hoodpopes', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '../html/home.html',
            controller: 'homeCtrl'
        })
        .when('/videos', {
            templateUrl: '../html/videos.html',
            controller: 'videosCtrl'
        })
        .when('/deckbuilder', {
            templateUrl: '../html/deckbuilder.html',
            controller: 'deckCtrl'
        })
        .when('/calendar', {
            templateUrl: '../html/calendar.html',
            controller: 'calendarCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);