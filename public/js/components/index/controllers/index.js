'use strict';

define(["app", "../../../services/global"], function(app) {
  app.lazy.controller("IndexController",
    ["$scope", "Global", function ($scope, Global) {

    $scope.startProjectEditorComponent = function() {
      $scope.$emit("start-project-editor");
      $scope.$emit("stop-index");
    };

  }]);
});
