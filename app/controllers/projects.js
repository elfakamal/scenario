"use strict";

var mongoose = require("mongoose");
var Project = mongoose.model("Project");
var _ = require("lodash");

//Find project by id ===========================================================
exports.project = function(request, response, next, projectId) {
  Project.findOne({_id: projectId}).exec(function(error, project) {
    if(error) return next(error);
    if(!project) return next(new Error("Failed to load project " + projectId));
    request.project = project;
    next();
  });
};

//show a project ===============================================================
exports.show = function(request, response) {
  response.jsonp(request.project);
};

//Read all projects ============================================================
exports.all = function(request, response) {
  Project.find()
  .sort("-created")
  .populate("user", "name username")
  .exec(function(error, projects) {
    if(error)
      response.render("error", {status: 500});
    else
      response.jsonp(projects);
  });
};

//Create a project =============================================================
exports.create = function(request, response) {
  //body is the project object.
  var project = new Project(request.body);
  project.user = request.user;

  project.save(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        project: project
      });
    } else {
      console.log(project);
      response.json(project);
    }
  });
};

//Update a project =============================================================
exports.update = function(request, response) {
  var project = request.project;
  project = _.extend(project, request.body);

  project.save(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        project: project
      });
    } else {
      response.jsonp(project);
    }
  });
};

//Remove a project =============================================================
exports.remove = function(request, response) {
  var project = request.project;

  project.remove(function(error) {
    if(error) {
      return response.send("users/signup", {
        errors: error.errors,
        project: project
      });
    } else {
      response.jsonp(project);
    }
  });
};



