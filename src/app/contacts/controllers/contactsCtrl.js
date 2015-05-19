define([
    'angular',
], function (angular) {
    'use strict';

    angular.module('uiRouterSample.contacts')
        .controller('uiRouterSample.contacts.contactsCtrl', [
            '$rootScope', '$scope', '$timeout',
            function($rootScope, $scope, $timeout) {
                $scope.message = 'I am contactsModule controller';
            }
        ]);
});

