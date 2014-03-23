"use strict";

define(["app", "../models/association"], function(app) {
  var AssociationController = function($scope) {
    $scope.name = "assoc";
  };

  app.lazy.controller("AssociationController", ["$scope", AssociationController]);
});