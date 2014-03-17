"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StateSchema = new Schema({
  created   : {type: Date, default: Date.now},
  title     : {type: String, default: "untitled state", trim: true},
  project   : {type: Schema.ObjectId, ref: "Project"},
  comments  : [{type: Schema.ObjectId, ref: "Comment"}]
});

/**
 * Validations
 */
StateSchema.path('title').validate(function(title) {
  return title.length;
}, 'Title cannot be blank');

mongoose.model("State", StateSchema);
