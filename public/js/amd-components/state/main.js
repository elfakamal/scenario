"use strict";

define(["text!./views/base.html", "./directives/state"], function(baseTemplate) {
  return {
    template: {
      base: baseTemplate,
      namespace: "http://www.w3.org/2000/svg"
    },

    preCompile: function(){
      //
    },

    loadComplete: function($element){
      //
    }
  };
});