"use strict";

define(["app", "services/project"], function(app) {
  app.lazy.controller("ProjectController",
    ["$scope", "$stateParams", "Project", function($scope, $stateParams, Project) {

    $scope.findOne = function() {
      Project.get({projectId: $stateParams.projectId}, function(project) {
        $scope.project = project;
      });
    };

    $scope.findOne();
  }]);
});
