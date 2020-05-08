'use strict';
angular.module(HomeConfiguration.moduleName).config(['$stateProvider', '$urlRouterProvider','$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
             .state('/', {
                 url: "/",
                 templateUrl: 'public/modules/home/views/home.client.html',
             }).state('home', {
                 url: "/home",
                 templateUrl: 'public/modules/home/views/home.client.html',
             }).state('contact', {
                 url: "/contact",
                 templateUrl: 'public/modules/home/views/contact.client.html',
             }).state('about', {
                 url: "/about",
                 templateUrl: 'public/modules/home/views/about.client.html',
             })

        if (window.history && window.history.pushState) {
            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

            // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase
            $locationProvider.html5Mode(true).hashPrefix('!');
            // if you don't wish to set base URL then use this
            //$locationProvider.html5Mode({
            //    enabled: true,
            //    requireBase: false
            //});
        }
}
]);
