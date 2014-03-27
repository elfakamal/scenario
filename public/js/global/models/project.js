'use strict';

define(["app"], function(app) {
  app.amd.factory('ProjectModel', ['$resource', function($resource) {
    return $resource('projects/:projectId', {
      projectId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }]);
});