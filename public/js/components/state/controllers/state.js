"use strict";

define(["app", "../models/state"], function(app) {
  var StateController = function($scope, StateModel, $location) {
    $scope.name = "untitled state";
  };

  app.lazy.controller("StateController", ["$scope", "StateModel", "$location", StateController]);
});