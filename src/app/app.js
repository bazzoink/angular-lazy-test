angular.module('uiRouterSample', [
  'oc.lazyLoad',
  'ct.ui.router.extras',
  'ui.router',
])

.run(
  [ '$rootScope',
    '$state',
    '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
)

.config(
  [ '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////

      $urlRouterProvider
        .otherwise('/');


      //////////////////////////
      // State Configurations //
      //////////////////////////

      $stateProvider
        .state("home", {
          url: "/",
          template: '<p class="lead">Welcome to the UI-Router Demo</p>' +
            '<p>Use the menu above to navigate. ' +
            'Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>' +
            '<a href="#/contacts">Contacts</a></p>'

        });
    }
  ]
)

// http://bardo.io/posts/oclazyload-future-states/
.config([
   '$ocLazyLoadProvider',
   '$futureStateProvider',
   function($ocLazyLoadProvider,
            $futureStateProvider) {

       var ocLazyLoadStateFactory = function ($q, $ocLazyLoad, futureState) {
           var deferred = $q.defer();
           $ocLazyLoad.load(futureState.module).then(function(name) {
               deferred.resolve();
           }, function() {
               deferred.reject();
           });
           return deferred.promise;
       };

      $futureStateProvider.stateFactory('ocLazyLoad', ocLazyLoadStateFactory);

      // lazy loaded modules
      $ocLazyLoadProvider.config({
        debug: true,
        modules: [{
          name: 'uiRouterSample.contacts',
          files: ['app/contacts/contacts.js']
        },
        {
          name: 'uiRouterSample.test',
          files: ['app/test/test.js']
        }]
      });

      // future states
       $futureStateProvider.futureState({
           'stateName': 'contacts',
           'urlPrefix': '/contacts',
           'type': 'ocLazyLoad',
           'module': 'uiRouterSample.contacts'
       });

       $futureStateProvider.futureState({
           'stateName': 'test',
           'urlPrefix': '/test',
           'type': 'ocLazyLoad',
           'module': 'uiRouterSample.test'
       });

   }
]);