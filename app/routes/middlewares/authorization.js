'use strict';

/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(request, response, next) {
  if (!request.isAuthenticated())
    return response.send(401, 'User is not authorized');

  next();
};