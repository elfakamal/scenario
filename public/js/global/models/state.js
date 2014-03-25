"use strict";

define(["app"], function(app)
{
  var StateModel = function($resource) {
    return $resource('states/:stateId', {
      stateId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  };

  app.amd.factory("StateModel", ["$resource", StateModel]);
});