"use strict";

define(["app", "models/state", "models/association", "models/comment"], function(app) {

  var ScenarioFactory = function($q, StateModel, AssociationModel, CommentModel) {

    this.createState = function(title) {
      var state = new StateModel({title: title});
      return state.$save();
    };

    this.createAssociation = function(title) {
      var association = new AssociationModel({title: title});
      return association.$save();
    };

    this.createComment = function(title, content) {
      var comment = new CommentModel({title: title, content: content});
      return comment.$save();
    };

  };

  app.amd.service("ScenarioFactory", ["$q", "StateModel", "AssociationModel", "CommentModel", ScenarioFactory]);
});