define(['angular'], function(angular) {
    'use strict';

    var module = angular.module('app.filters', []);

    module.config(['$filterProvider', function($filterProvider) {
        module._filter = module.filter;
        module.filter = function(name, filter) {
            $filterProvider.register(name, filter);
        };
    }]);

    return module;
});
