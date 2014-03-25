"use strict";

define(["jquery", "jquery-ui", "./controllers/toolbox"], function($) {
  return {
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