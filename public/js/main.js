"use strict";

/**
 * Configuring require.
 */
require.config({
  paths: {
    "jquery": "../lib/jquery/dist/jquery",
    "jquery-ui": "../lib/jquery-ui/ui/",
    "jquery-ui-core": "../lib/jquery-ui/ui/jquery.ui.core",
    "jquery-ui-draggable": "../lib/jquery-ui/ui/jquery.ui.draggable",
    "angular": "../lib/angular/angular",
    "underscore": "../lib/lodash/dist/lodash.underscore",
    "angular-resource": "../lib/angular-resource/angular-resource",
    "angular-cookies": "../lib/angular-cookies/angular-cookies",
    "angular-bootstrap": "../lib/angular-bootstrap/ui-bootstrap",
    "angular-ui-router": "../lib/angular-ui-router/release/angular-ui-router",
    "text": "../lib/requirejs-text/text",
    "constants": "./config/constants",
    "app": "./app",
    "services": "./services/"
  },
  shim: {
    "angular": {exports: 'angular'},
    "underscore": {exports: "_"},
    "angular-resource": {deps: ['angular']},
    "angular-cookies": {deps: ['angular']},
    "angular-bootstrap": {deps: ['angular']},
    "angular-ui-router": {deps: ['angular']},
    "app": {deps: ['angular', 'constants']}
  },
  priority: ["angular"]
});

require([
    "angular",
    "app",
    "angular-resource",
    "angular-cookies",
    "angular-bootstrap",
    "angular-ui-router"
  ],
  
  function(angular, app)
  {
    angular.element(document).ready(function() {
      //Fixing facebook bug with redirect
      if (window.location.hash === '#_=_')
        window.location.hash = '#!';

      //Then init the app
      angular.bootstrap(document, ["scenario"]);
    });

    return app;
  }
);