"use strict";

define(["app"], function(app){
  app.lazy.controller("ProjectController", ["$scope", "$stateParams", "Project", function($scope, Project) {

    $scope.findOne = function() {
      Project.get({projectId: $stateParams.projectId}, function(project) {
        $scope.project = project;
      });
    };

  }]);
});
