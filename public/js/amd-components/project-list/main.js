"use strict";

define(["./controllers/project-list", "text!./views/base.html"], function(projectListController, baseTemplate) {
  return {
    template: {
      base: baseTemplate,
      namespace: ""
    }
  };
});