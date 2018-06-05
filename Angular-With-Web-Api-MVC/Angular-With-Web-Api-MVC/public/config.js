var ApplicationConfiguration = (function () {
    var applicationModuleName = 'MyCommunityApplication';
    var applicationModuleVendorDependencies = ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ngResource', 'ngMessages', 'toastr', 'satellizer'];

    var registerModule = function (moduleName, dependencies) {
        angular.module(moduleName, dependencies || []);
        angular.module(applicationModuleName).requires.push(moduleName);
    };
    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();
