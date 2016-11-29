define(['angular'], function(angular) {
    'use strict';

    var module = angular.module('app.directives', []);

    module.config(['$compileProvider', function($compileProvider) {
        module._directive = module.directive;
        module.directive = function(name, factory) {
            $compileProvider.directive(name, factory);
            return this;
        };
    }]);
    
    return module;
});
