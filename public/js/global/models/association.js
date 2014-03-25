"use strict";

define(["app"], function(app) {
  var AssociationModel = function($resource) {
    return $resource('associations/:associationId', {
      associationId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  };

  app.amd.factory("AssociationModel", ["$resource", AssociationModel]);
});