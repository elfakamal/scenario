'use strict';

define(["app", "services/global"], function(app) {
  app.amd.controller("SplashController", ["$scope", function ($scope) {
    $scope.startProjectEditorComponent = function() {
      $scope.$emit("start-project-editor");
      $scope.$emit("stop-splash");
    };
  }]);
});
