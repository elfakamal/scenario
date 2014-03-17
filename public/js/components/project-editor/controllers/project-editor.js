"use strict";

define(["app", "underscore", "services/project"], function(app, _) {
  app.lazy.controller("ProjectEditorController",
    ["$scope", "$stateParams", "$location", "Project", function($scope, $stateParams, $location, Project) {

    $scope.findOne = function() {
      Project.get({
        projectId: $stateParams.projectId
      }, function(project) {
        $scope.project = project;
      });
    };

    $scope.create = function() {
      //the fact that we are in the body of a $scope function
      //allows us to refer to title using the "this" keyword.
      //it's like doing this "$scope.title".
      var project = new Project({
        title: this.title,
        description: this.description
      });

      project.$save(function(response) {
        $location.path('projects/' + response._id);
      });

      this.title = "";
      this.description = "";
    };

    $scope.update = function() {
      var project = $scope.project;
      if (!project.updated) {
        project.updated = [];
      }
      project.updated.push(new Date().getTime());

      project.$update(function() {
        $location.path('projects/' + project._id);
      });
    };
  }]);
});