"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  created     : {type: Date, default: Date.now},
  title       : {type: String, default: "untitled project", trim: true},
  description : {type: String, trim: true},
  user        : {type: Schema.ObjectId, ref: "User"},
  states      : [{type: Schema.Types.ObjectId, ref: "State"}],
  directions  : Array,
  comments    : [{type: Schema.ObjectId, ref: "Comment"}]
});

/**
 * Validations
 */
ProjectSchema.path('title').validate(function(title) {
  return title.length;
}, 'Title cannot be blank');

mongoose.model("Project", ProjectSchema);
