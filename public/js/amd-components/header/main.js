"use strict";

define(["jquery", "angular", "./controllers/header", "text!./views/base.html"], function($, angular, header, baseTemplate) {
  return {

    template: {
      base: baseTemplate,
      namespace: ""
    },

    preCompile: function()
    {
      //getting access to the injector of the running app "scenario" from outside Angular.
      angular.element(document).injector().invoke(["$rootScope", "Global", function($rootScope, Global)
      {

        var isUserConnected = false;

        //TODO: check whether the user is connected.
        isUserConnected = Global.authenticated;

        $rootScope.$emit("start-splash");

        // if(isUserConnected) {
        //   console.log("user connected");
        //   // $rootScope.$emit("start-project-editor");
        // } else {
        //   console.log("start-project-list");
        // }

      }]);
    },

    loadComplete: function() {
      //setting the main content's height
      var documentHeight = $(document).height();
      $("#section-main-content").css("height", (documentHeight - 52) + "px");
      //alert("header component loaded");

    }
  };
});