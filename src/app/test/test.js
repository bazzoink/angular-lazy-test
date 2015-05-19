define([
    'angular',
    'angularUiRouter',
], function (angular) {
    'use strict';

    angular.module('uiRouterSample.test', [
      'ui.router'
    ])
    .config(
      [
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {
          $stateProvider
            .state('test', {
              url: '/test',
              templateUrl: 'app/test/test.html',
            })
        }
      ]
    );
});