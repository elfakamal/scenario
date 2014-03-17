'use strict';

define(["app"], function(app) {
  //Articles service used for articles REST endpoint
  app.lazy.factory('Project', ['$resource', function($resource) {
    return $resource('projects/:projectId', {
      projectId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }]);
});
