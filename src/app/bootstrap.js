require([
    'angular',
    'app'
], function (angular) {
        'use strict';
        $(document).ready(function () {
            angular.bootstrap(document, ['uiRouterSample']);
        });
    }
);