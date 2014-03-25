"use strict";

define([
  "angular",
  "constants",
  "./config/route-config",
  "./config/location-config",
  "./global/directives/amd-component",
  "./global/services/global"
],
function(angular, constants, routeConfig, locationConfig, AMDComponentDirective, Global) {

  /**
   * Start the main application
   *
   * We manually start this bootstrap process; since ng:app is gone
   * ( necessary to allow Loader splash pre-AngularJS activity to finish properly )
   */
  var app = angular.module(constants.APP_NAME, [
    'ngCookies',
    'ngResource',
    'ui.bootstrap',
    'ui.router',
    'scenario.system',
    'scenario.articles'
  ])
  .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function($controllerProvider, $compileProvider, $filterProvider, $provide)
    {
      app.amd = {
        controller : $controllerProvider.register,
        directive  : $compileProvider.directive,
        filter     : $filterProvider.register,
        factory    : $provide.factory,
        service    : $provide.service
      };
    }
  ])
  .config(routeConfig)
  .config(locationConfig);

  //AMD directive to lazy load components.
  angular.module('scenario.system', [])
    .directive(constants.AMD_DIRECTIVE_NAME, AMDComponentDirective);

  //Global service for global variables
  angular.module("scenario.system").factory('Global', Global);

  angular.module('scenario.articles', []);

  return app;
});
