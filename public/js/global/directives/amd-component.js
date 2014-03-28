'use strict';

define(["require", "underscore", "../../config/constants"], function(require, _, constants) {

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
          console.log("AMDComponent::bootstrap " + component);
          var main = "../../" + constants.AMD_FOLDER_NAME + "/" + component + "/" + constants.COMPONENT_MAIN_FILE;

          //load the component and its view
          require([main], function(Component)
          {
            var preCompile = constants.COMPONENT_PRE_COMPILE_FUNCTION;
            var loadComplete = constants.COMPONENT_LOAD_COMPLETE_FUNCTION;

            //it verfies whether the component has the preCompile method to call it.
            if(_.has(Component, preCompile))
              Component[preCompile].apply(Component);

            //we need the $apply function to persist the $compile work.
            $rootScope.$apply(function()
            {
              var baseTemplate = "";

              if(_.has(Component, "template") && _.has(Component.template, "base"))
              {
                baseTemplate = Component.template.base;

                //load its view and replace the original container by the view.
                var angularElement = $compile(baseTemplate)($scope);
                $element.empty();

                // if(_.has(Component, "viewNamespace")) {
                //   angularElement.attr("xmlns", Component["viewNamespace"]);
                // }

                $element.append(angularElement);
              }

              //it verfies whether the component has the loadComplete method to call it.
              if(_.has(Component, loadComplete))
                Component[loadComplete].apply(Component, [$element]);
            });
          });
        };

        //if the component is intended to be started automatically, it will,
        //otherwise it will need the be started using an event,
        //for instance "start-<component name>".
        if( _.has($attrs, constants.COMPONENT_AUTO_START_ATTRIBUTE) ) {
          //automatically start a component
          bootstrapComponent();
        }

        //removing a component is as simple as removing its html content,
        //we can't (& must not) unload the dependencies from RequireJS 
        //neither from angular.
        var removeComponent = function() {
          $element.empty();
        };

        //listening for the stop event to manually start a component.
        $rootScope.$on("start-" + component, function() {
          bootstrapComponent();
        });

        //listening for the stop event, to remove the component.
        $rootScope.$on("stop-" + component, function() {
          console.log("AMDComponent::stop " + component);
          removeComponent();
        });
      }
    };
  };

  return ["$compile", "$rootScope", AMDComponent];
});