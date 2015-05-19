define([
    'angular',
    'angularUiRouter',
], function (angular) {
    'use strict';

    angular.module('uiRouterSample.contacts', [
      'ui.router'
    ])
    .config(
      [
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {
          $stateProvider
            .state('contacts', {
              url: '/contacts',
              templateUrl: 'app/contacts/contacts.html',
              controller: 'uiRouterSample.contacts.contactsCtrl'
            })
        }
      ]
    );
});

