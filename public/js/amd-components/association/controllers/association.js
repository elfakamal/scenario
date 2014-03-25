"use strict";

define(["app", "models/association"], function(app) {
  var AssociationController = function($scope) {
    $scope.name = "assoc";
  };

  app.amd.controller("AssociationController", ["$scope", AssociationController]);
});