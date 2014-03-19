"use strict";

define(["app"], function(app) {
  app.lazy.factory("ToolBox", function() {
    return [
      {name: "Add State",         link: "", icon: "icon-mixte-browser-streamline-window"},
      {name: "Add Association",   link: "", icon: "icon-mixte-ionicons-5"},
      {name: "Add Comment",       link: "", icon: "icon-mixte-bubble-comment-streamline-talk"},
      {name: "Project Setting",   link: "", icon: "icon-mixte-settings-streamline-1"}
    ];
  });
});