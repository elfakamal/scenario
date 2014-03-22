"use strict";

define(["app"], function(app) {
  var AssociationModel = function() {
    return $resource('associations/:associationId', {
      associationId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  };

  app.lazy.factory("AssociationModel", [AssociationModel]);
});