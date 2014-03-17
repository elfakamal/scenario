"use strict";

var mongoose = require("mongoose");
var State = mongoose.model("State");
var _ = require("lodash");

//Find state by id =============================================================
exports.state = function(request, response, next, stateId) {
  State.findOne({_id: stateId}).exec(function(error, state) {
    if(error) return next(error);
    if(!state) return next(new Error("Failed to load state " + stateId));
    request.state = state;
    next();
  });
};

//show a state =================================================================
exports.show = function(request, response) {
  response.jsonp(request.state);
};

//Read all states ==============================================================
exports.all = function(request, response) {
  State.find()
  .sort("-created")
  .populate("user", "name username")
  .exec(function(error, states) {
    if(error)
      response.render("error", {status: 500});
    else
      response.jsonp(states);
  });
};

//Create a state ===============================================================
exports.create = function(request, response) {
  //body is the state object.
  var state = new State(request.body);
  state.user = request.user;

  state.save(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        state: state
      });
    } else {
      response.json(state);
    }
  });
};

//Update a state ===============================================================
exports.update = function(request, response) {
  var state = request.state;
  state = _.extend(state, request.body);

  state.save(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        state: state
      });
    } else {
      response.jsonp(state);
    }
  });
};

//Remove a state ===============================================================
exports.remove = function(request, response) {
  var state = request.state;

  state.remove(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        state: state
      });
    } else {
      response.jsonp(state);
    }
  });
};



