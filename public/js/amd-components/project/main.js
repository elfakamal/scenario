"use strict";

define(["jquery", "./controllers/project"], function($) {
  return {
    viewNamespace: "http://www.w3.org/2000/svg",
    preCompile: function () {
      //
    },

    loadComplete: function() {
      var documentHeight = $(document).height();
      $("svg.project").css("height", (documentHeight - 52) + "px");
    }
  };
});