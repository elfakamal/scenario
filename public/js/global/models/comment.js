"use strict";

define(["app"], function(app)
{
  var CommentModel = function($resource) {
    return $resource('comments/:commentId', {
      commentId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  };

  app.amd.factory("CommentModel", ["$resource", CommentModel]);
});