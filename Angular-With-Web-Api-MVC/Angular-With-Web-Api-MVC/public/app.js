'use strict';
var app = angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);
app.controller('MainController', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    $rootScope.pageTitle = 'Home';
    $rootScope.pageDescription = 'This page requires you to login';
    $scope.goToPage = function (url, params) {
        console.log(' $scope.goToPage ' + url + ' : ' + JSON.stringify(params))
        if (!params)
            $state.go(url);
        else
        {
            $state.go(url, JSON.stringify(params));
        }
           
    };

}]);
angular.element(document).ready(function () {
    if (window.location.hash === '#_=_') window.location.hash = '#!';
    angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});