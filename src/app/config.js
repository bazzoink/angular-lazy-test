'use strict';

require.config({

    deps: ['bootstrap'],

    paths: {
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular',
        angularUiRouter: '//angular-ui.github.io/ui-router/release/angular-ui-router',
        jquery: '//code.jquery.com/jquery-1.11.3.min',
        ocLazyLoad: 'assets/ocLazyLoad.min',
        uiRouterExtras: 'assets/ct-ui-router-extras.min',
    },

    shim: {
        angular: { deps: ['jquery'], exports: 'angular' },
        angularUiRouter: {deps: ['angular']},
        jquery: { exports: '$' },
        ocLazyLoad: {deps: ['angular']},
        uiRouterExtras: {deps: ['angularUiRouter']},
    }

});