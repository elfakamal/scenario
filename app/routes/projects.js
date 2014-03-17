'use strict';

// Projects routes use projects controller
var projects = require('../controllers/projects');
var authorization = require('./middlewares/authorization');

// Project authorization helpers
var hasAuthorization = function(request, response, next) {
  if (request.project.user.id !== request.user.id)
    return response.send(401, 'User is not authorized');

  next();
};

module.exports = function(app) {

  app.get('/projects', projects.all);
  app.post('/projects', authorization.requiresLogin, projects.create);
  app.get('/projects/:projectId', projects.show);
  app.put('/projects/:projectId', authorization.requiresLogin, hasAuthorization, projects.update);
  app.del('/projects/:projectId', authorization.requiresLogin, hasAuthorization, projects.remove);

  // Finish with setting up the projectId param
  app.param('projectId', projects.project);

};