"use strict";

define(["app", "../models/toolbox", "services/scenario-factory"], function(app) {

  var ScenarioFactory = function($scope, $rootScope, ToolBox, ScenarioFactory) {
    $scope.items = ToolBox;

    var createState = function() {
      //debugger;
      var statePromise = ScenarioFactory.createState();
      statePromise.then(function(state) {
        $rootScope.$emit("project::add-state", state);
      });
    };

    var createAssociation = function() {

    };

    $scope.onToolClick = function(type)
    {
      switch(true)
      {
        case (type === "state") : {
          createState();
          break;
        }
      }
    };

  };

  app.amd.controller("ToolBoxController", ["$scope", "$rootScope", "ToolBox", "ScenarioFactory", ScenarioFactory]);
});