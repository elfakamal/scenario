"use strict";

define(["jquery", "./controllers/splash", "text!./views/base.html"], function($, splashController, baseTemplate) {
  return {
    template: {
      base: baseTemplate,
      namespace: ""
    },

    loadComplete: function() {
      var documentHeight = $(document).height();
      $("#section-splash-screen").css("height", (documentHeight - 52) + "px");
    }
  };
});
