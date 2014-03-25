"use strict";

define(["app", "../models/toolbox"], function(app) {

  app.amd.controller("ToolBoxController", ["$scope", "ToolBox", function($scope, ToolBox) {
    $scope.items = ToolBox;

    $scope.createState = function() {
      //the fact that we are in the body of a $scope function
      //allows us to refer to title using the "this" keyword.
      //it's like doing this "$scope.title".
      var state = new StateModel({
        title: this.title
      });

      state.$save(function(response) {
        $location.path('states/' + response._id);
      });

      this.title = "";
    };

    $scope.createAssociation = function() {

    };

  }]);
});