'use strict';

var ApplicationConfiguration = (function() {
    var applicationModuleName = 'angularjsapp';
    var applicationModuleVendorDependencies = [
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'ui.utils'
    ];

    var registerModule = function(moduleName) {
        angular
            .module(moduleName, []);

        angular
            .module(applicationModuleName)
            .requires
            .push(moduleName);
    };

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();
