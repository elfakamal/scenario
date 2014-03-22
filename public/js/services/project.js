'use strict';

define(["app"], function(app) {
  app.lazy.factory('ProjectModel', ['$resource', function($resource) {
    return $resource('projects/:projectId', {
      projectId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }]);
});
