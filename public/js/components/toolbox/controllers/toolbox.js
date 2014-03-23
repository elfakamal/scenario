"use strict";

define(["app", "../models/toolbox"], function(app) {
  app.lazy.controller("ToolBoxController", ["$scope", "ToolBox", function($scope, ToolBox) {
    $scope.items = ToolBox;
  }]);
});