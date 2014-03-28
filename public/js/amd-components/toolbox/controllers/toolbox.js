"use strict";

define(["app", "../models/toolbox", "services/scenario-factory"], function(app) {

  var ScenarioFactory = function($scope, $rootScope, ToolBox, ScenarioFactory) {
    $scope.items = ToolBox;

    var createState = function() {
      var statePromise = ScenarioFactory.createState();
      statePromise.then(function(state) {
        $rootScope.$emit("project::add-state", state);
      });
    };

    $scope.onToolClick = function(type)
    {
      if(type === "state") createState();
    };

  };

  app.amd.controller("ToolBoxController", ["$scope", "$rootScope", "ToolBox", "ScenarioFactory", ScenarioFactory]);
});