'use strict';

// Comments routes use comments controller
var comments = require('../controllers/comments');
var authorization = require('./middlewares/authorization');

// Comment authorization helpers
var hasAuthorization = function(request, response, next) {
  if (request.comment.user.id !== request.user.id)
    return response.send(401, 'User is not authorized');

  next();
};

module.exports = function(app) {

  app.get('/comments', comments.all);
  app.post('/comments', authorization.requiresLogin, comments.create);
  app.get('/comments/:commentId', comments.show);
  app.put('/comments/:commentId', authorization.requiresLogin, hasAuthorization, comments.update);
  app.del('/comments/:commentId', authorization.requiresLogin, hasAuthorization, comments.remove);

  // Finish with setting up the commentId param
  app.param('commentId', comments.comment);

};