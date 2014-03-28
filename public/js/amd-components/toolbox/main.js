"use strict";

define(["jquery", "text!./views/base.html", "./controllers/toolbox", "jquery-ui"], function($, baseTemplate) {
  return {
    template: {
      base: baseTemplate,
      namespace: ""
    },

    preCompile: function() {
      //
    },

    loadComplete: function() {
      $("#section-toolbox-component").draggable({
        handle: "div.drag-handle",
        containment: "parent"
      });
    }
  };
});