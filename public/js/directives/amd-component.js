'use strict';

define(["require", "jquery", "constants", "underscore"], function(require, $, constants, _) {

  var AMDComponent = function($compile, $rootScope) {
    return {
      restrict: "A",

      link: function($scope, $element, $attrs)
      {
        var component = $attrs[constants.AMD_DIRECTIVE_NAME];

        if(typeof component === "undefined" || typeof component !== "string" || component === null)
          throw new Error("component is undefined / not a string / null");

        /**
         * Starts the component by loading its main.js file
         * and its base template from the views.
         */
        var bootstrapComponent = function() {
          var main = "../components/" + component + "/main";
          var template = "text!../components/" + component + "/views/base.html";

          //load the component and its view
          require([main, template], function(Component, baseTemplate)
          {
            //it verfies whether the component has the preCompile method to call it.
            if(_.has(Component, "preCompile"))
              Component.preCompile.apply(Component);

            //TODO: if there is a problem with nested components :
            //use jquery to check for automatic components in the "baseTemplate".
            //if any, register them and remove auto-start-component attributes
            //in order to prevent triggering the $apply inside the parent $apply.
            //and then start the registered components (which are automatic).

            //debugger;

            //we need the $apply function to persist the $compile work.
            $rootScope.$apply(function()
            {
              //load its view and replace the original container by the view.
              var angularElement = $compile(baseTemplate)($scope);
              $element.append(angularElement);

              //it verfies whether the component has the loadComplete method to call it.
              if(_.has(Component, "loadComplete"))
                Component.loadComplete.apply(Component);
            });
          });
        };

        //if the component is intended to be started automatically, it will,
        //otherwise it will need the be started using an event,
        //for instance "start-<component name>".
        if( _.has($attrs, "autoStartComponent") ) {
          //automatically start a component
          bootstrapComponent();
        } else {
          //manually start a component
          $rootScope.$on("start-" + component, function() {
            bootstrapComponent();
          });
        }

        //removing a component is as simple as removing its html content,
        //we can't (& must not) unload the dependencies from RequireJS 
        //neither from angular.
        var removeComponent = function() {
          $($element).html("");
        };

        //listening for the stop event, to remove the component.
        $rootScope.$on("stop-" + component, function() {
          removeComponent();
        });
      }
    };
  };

  return ["$compile", "$rootScope", AMDComponent];
});