"use strict";

define(["app", "services/project"], function(app) {
  app.lazy.controller("ProjectListController",
    ["$scope", "$stateParams", "$location", "Project", function($scope, $stateParams, $location, Project) {
    $scope.projects = [];

    $scope.find = function() {
      Project.query(function(projects) {
        $scope.projects = projects;
      });
    };

    $scope.find();
  }]);
});