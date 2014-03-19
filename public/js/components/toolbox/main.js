"use strict";

define([
  "jquery",
  "jquery-ui/jquery.ui.core",
  "jquery-ui/jquery.ui.widget",
  "jquery-ui/jquery.ui.mouse",
  "jquery-ui/jquery.ui.draggable",
  "./controllers/toolbox"
  ],
  function($) {

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