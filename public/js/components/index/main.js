"use strict";

define(["jquery", "./controllers/index"], function($) {
  return {
    start: function() {
      console.log("Index::main::start - starting ...");
      //some cool stuff here
      console.log("Index::main::start - started!");
    },

    loadComplete: function() {
      var documentHeight = $(document).height();
      $("#section-splash-screen").css("height", (documentHeight - 52) + "px");
    }
  };
});
