"use strict";

define(["app", "../models/state"], function(app) {
  var StateController = function($scope) {
    
    $scope.create = function() {
      //the fact that we are in the body of a $scope function
      //allows us to refer to title using the "this" keyword.
      //it's like doing this "$scope.title".
      var project = new ProjectModel({
        title: this.title,
        description: this.description
      });

      project.$save(function(response) {
        $location.path('projects/' + response._id);
      });

      this.title = "";
      this.description = "";
    };

  };

  app.lazy.controller("StateController", ["$scope", StateController]);
});