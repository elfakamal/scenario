"use strict";

define(["jquery", "angular", "./controllers/header"], function($, angular) {
  return {

    preCompile: function()
    {
      //getting access to the injector of the running app "scenario" from outside Angular.
      angular.element(document).injector().invoke(["$rootScope", "Global", function($rootScope, Global)
      {
        var isUserConnected = false;

        //TODO: check whether the user is connected.
        isUserConnected = Global.authenticated;

        if(isUserConnected) {
          // $rootScope.$broadcast("start-project-editor");
          $rootScope.$broadcast("start-index");
        } else {
          console.log("start-project-list");
          // $rootScope.$broadcast("start-project-list");
        }
      }]);
    },

    loadComplete: function() {
      //setting the main content's height
      var documentHeight = $(document).height();
      $("#section-main-content").css("height", (documentHeight - 52) + "px");
    }
  };
});