"use strict";

define(["./directives/state", "text!../views/base.html"], function(state, baseTemplate) {
  return {
    template: {
      base: baseTemplate,
      namespace: "http://www.w3.org/2000/svg"
    },

    preCompile: function(){
      //
    },

    loadComplete: function(){
      //
    }
  };
});