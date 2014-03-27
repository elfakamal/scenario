"use strict";

define(["app"], function(app) {

  var StateDirective = function($rootScope) {
    return {
      restrict: "A",
      scope: {},

      controller: function($scope, $element, $attrs) {
        debugger;
        
      },

      link: function($scope, $element, $attrs) {
        var propertyRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        propertyRect.setAttribute("x", 0);
        propertyRect.setAttribute("y", 0);
        propertyRect.setAttribute("width", 20);
        propertyRect.setAttribute("height", 20);
        propertyRect.setAttribute("style", "fill:yellowgreen");

        debugger;
        $element.appendChild(propertyRect);
      }
    }
  }

  app.amd.directive("State", ["$rootScope", StateDirective]);
});