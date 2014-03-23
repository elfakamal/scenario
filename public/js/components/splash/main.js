"use strict";

define(["jquery", "./controllers/splash"], function($) {
  
  console.log("Index::main::start - starting ...");
  
  return {
    loadComplete: function() {
      var documentHeight = $(document).height();
      $("#section-splash-screen").css("height", (documentHeight - 52) + "px");

      console.log("Index::main::start - started!");
    }
  };
});
