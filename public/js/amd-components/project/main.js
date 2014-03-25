"use strict";

define(["jquery", "./controllers/project"], function($) {
  return {
    preCompile: function () {
      //
    },

    loadComplete: function() {
      var documentHeight = $(document).height();
      $("svg.project").css("height", (documentHeight - 52) + "px");
    }
  };
});