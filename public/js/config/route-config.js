'use strict';

define([], function() {

  //Setting up route
  var configFn = function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('project by id', {
        url: '/projects/:projectId',
        templateUrl: 'views/project.html'
      })
      .state('home', {
        url: '/',
        templateUrl: 'views/index.html'
      });
  };

	return ["$stateProvider", "$urlRouterProvider", configFn];
});
