"use strict";

// States routes use states controller
var states = require('../controllers/states');
var authorization = require('./middlewares/authorization');

// State authorization helpers
var hasAuthorization = function(request, response, next) {
  if (request.state.user.id !== request.user.id)
    return response.send(401, 'User is not authorized');

  next();
};

module.exports = function(app) {

  app.get('/states', states.all);
  app.post('/states', authorization.requiresLogin, states.create);
  app.get('/states/:stateId', states.show);
  app.put('/states/:stateId', authorization.requiresLogin, hasAuthorization, states.update);
  app.del('/states/:stateId', authorization.requiresLogin, hasAuthorization, states.remove);

  // Finish with setting up the stateId param
  app.param('stateId', states.state);

};