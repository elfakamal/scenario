"use strict";

define(["app", "services/project"], function(app) {

  var ProjectListController = function($scope, $stateParams, $location, ProjectModel) {
    $scope.projects = [];

    $scope.find = function() {
      ProjectModel.query(function(projects) {
        $scope.projects = projects;
      });
    };

    $scope.find();
  };

  app.lazy.controller(
    "ProjectListController",
    ["$scope", "$stateParams", "$location", "ProjectModel", ProjectListController]
  );
});