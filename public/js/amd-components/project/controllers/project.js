"use strict";

define(["app", "models/project"], function(app)
{
  var ProjectController = function($scope, $rootScope, $stateParams, ProjectModel)
  {
    $scope.states = [];

    $rootScope.$on("add-state", function(state) {
      $scope.states.push(state);
    });

    /**
     * Retrieve the open project.
     */
    $scope.findOne = function() {
      ProjectModel.get({projectId: $stateParams.projectId}, function(project) {
        $scope.project = project;
      });
    };

    $scope.findOne();
  };

  app.amd.controller("ProjectController", [
    "$scope", "$rootScope", "$stateParams", "ProjectModel", ProjectController
  ]);
});
