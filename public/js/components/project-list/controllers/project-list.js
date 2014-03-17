"use strict";

define(["app", "underscore", "../models/project"], function(app, _) {
  app.lazy.controller("ProjectListController",
    ["$scope", "$stateParams", "$location", "Project", function($scope, $stateParams, $location, Project) {
    $scope.projects = [];

    $scope.create = function() {
      //the fact that we are in the body of a $scope function
      //allows us to refer to title using the "this" keyword.
      //it's like doing this "$scope.title".
      var project = new Project({title: this.title});

      project.$save(function(response) {
        $location.path('projects/' + response._id);
      });

      this.title = '';
    };

    $scope.remove = function(project) {
      if (project) {
        project.$remove();

        for (var i in $scope.projects) {
          if ($scope.projects[i] === project) {
            $scope.projects.splice(i, 1);
          }
        }
      }
      else {
        $scope.project.$remove();
        $location.path('projects');
      }
    };

    $scope.find = function() {
      Project.query(function(projects) {
        $scope.projects = projects;
      });
    };

  }]);
});