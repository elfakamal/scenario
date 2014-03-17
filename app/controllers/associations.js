"use strict";

var mongoose = require("mongoose");
var Association = mongoose.model("Association");
var _ = require("lodash");

//Find association by id =======================================================
exports.association = function(request, response, next, associationId) {
  Association.findOne({_id: associationId}).exec(function(error, association) {
    if(error) return next(error);
    if(!association) return next(new Error("Failed to load association " + associationId));
    request.association = association;
    next();
  });
};

//show a association ===========================================================
exports.show = function(request, response) {
  response.jsonp(request.association);
};

//Read all associations ========================================================
exports.all = function(request, response) {
  Association.find()
  .sort("-created")
  .populate("user", "name username")
  .exec(function(error, associations) {
    if(error)
      response.render("error", {status: 500});
    else
      response.jsonp(associations);
  });
};

//Create a association =========================================================
exports.create = function(request, response) {
  //body is the association object.
  var association = new Association(request.body);
  association.user = request.user;

  association.save(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        association: association
      });
    } else {
      response.json(association);
    }
  });
};

//Update a association =========================================================
exports.update = function(request, response) {
  var association = request.association;
  association = _.extend(association, request.body);

  association.save(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        association: association
      });
    } else {
      response.jsonp(association);
    }
  });
};

//Remove a association =========================================================
exports.remove = function(request, response) {
  var association = request.association;

  association.remove(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        association: association
      });
    } else {
      response.jsonp(association);
    }
  });
};



