"use strict";

define(["jquery", "./controllers/project", "text!./views/base.html"], function($, project, baseTemplate) {

  return {
    template: {
      base: baseTemplate,
      namespace: "http://www.w3.org/2000/svg"
    },

    preCompile: function () {
      //
    },

    loadComplete: function() {
      var documentHeight = $(document).height();
      $("svg.project").css("height", (documentHeight - 52) + "px");
    }
  };
});