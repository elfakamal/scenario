"use strict";

define(["app"], function(app) {
  app.amd.factory("ToolBox", function() {
    return [
      {name: "Add State",         type: "state",        icon: "icon-mixte-browser-streamline-window"},
      {name: "Add Association",   type: "association",  icon: "icon-mixte-ionicons-5"},
      {name: "Add Comment",       type: "comment",      icon: "icon-mixte-bubble-comment-streamline-talk"},
      {name: "Project Setting",   type: "settings",     icon: "icon-mixte-settings-streamline-1"}
    ];
  });
});