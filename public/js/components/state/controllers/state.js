"use strict";

define(["app", "../models/state"], function(app) {
  var StateController = function($scope, StateModel, $location) {
    
    $scope.create = function() {
      //the fact that we are in the body of a $scope function
      //allows us to refer to title using the "this" keyword.
      //it's like doing this "$scope.title".
      var state = new StateModel({
        title: this.title,
        description: this.description
      });

      state.$save(function(response) {
        $location.path('states/' + response._id);
      });

      this.title = "";
      this.description = "";
    };

  };

  app.lazy.controller("StateController", ["$scope", "StateModel", "$location", StateController]);
});