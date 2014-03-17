"use strict";

var mongoose = require("mongoose");
var Comment = mongoose.model("Comment");
var _ = require("lodash");

//Find comment by id ===========================================================
exports.comment = function(request, response, next, commentId) {
  Comment.findOne({_id: commentId}).exec(function(error, comment) {
    if(error) return next(error);
    if(!comment) return next(new Error("Failed to load comment " + commentId));
    request.comment = comment;
    next();
  });
};

//show a comment ===============================================================
exports.show = function(request, response) {
  response.jsonp(request.comment);
};

//Read all comments ============================================================
exports.all = function(request, response) {
  Comment.find()
  .sort("-created")
  .populate("user", "name username")
  .exec(function(error, comments) {
    if(error)
      response.render("error", {status: 500});
    else
      response.jsonp(comments);
  });
};

//Create a comment =============================================================
exports.create = function(request, response) {
  //body is the comment object.
  var comment = new Comment(request.body);
  comment.user = request.user;

  comment.save(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        comment: comment
      });
    } else {
      response.json(comment);
    }
  });
};

//Update a comment =============================================================
exports.update = function(request, response) {
  var comment = request.comment;
  comment = _.extend(comment, request.body);

  comment.save(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        comment: comment
      });
    } else {
      response.jsonp(comment);
    }
  });
};

//Remove a comment =============================================================
exports.remove = function(request, response) {
  var comment = request.comment;

  comment.remove(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        comment: comment
      });
    } else {
      response.jsonp(comment);
    }
  });
};



