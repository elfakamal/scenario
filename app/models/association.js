"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AssociationSchema = new Schema({
  created     : {type: Date, default: Date.now},
  title       : {type: String, default: "untitled association", trim: true},
  description : {type: String, default: "", trim: true},

  source      : {type: Schema.ObjectId, ref: "State"},
  destination : {type: Schema.ObjectId, ref: "State"},

  project     : {type: Schema.ObjectId, ref: "Project"},
  comments    : [{type: Schema.ObjectId, ref: "Comment"}]
});

/**
 * Validations
 */
AssociationSchema.path('title').validate(function(title) {
  return title.length;
}, 'Title cannot be blank');

mongoose.model("Association", AssociationSchema);
