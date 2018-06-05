'use strict';
angular.module(HomeConfiguration.moduleName).config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {
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
}
]);
