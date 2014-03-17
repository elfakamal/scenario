'use strict';

// Associations routes use associations controller
var associations = require('../controllers/associations');
var authorization = require('./middlewares/authorization');

// Association authorization helpers
var hasAuthorization = function(request, response, next) {
  if (request.association.user.id !== request.user.id)
    return response.send(401, 'User is not authorized');

  next();
};

module.exports = function(app) {

  app.get('/associations', associations.all);
  app.post('/associations', authorization.requiresLogin, associations.create);
  app.get('/associations/:associationId', associations.show);
  app.put('/associations/:associationId', authorization.requiresLogin, hasAuthorization, associations.update);
  app.del('/associations/:associationId', authorization.requiresLogin, hasAuthorization, associations.remove);

  // Finish with setting up the associationId param
  app.param('associationId', associations.association);

};