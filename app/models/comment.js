"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  created : {type: Date, default: Date.now},
  title   : {type: String, default: "untitled comment", trim: true},
  content : {type: String, trim: true}
});

/**
 * Validations
 */
CommentSchema.path('title').validate(function(title) {
  return title.length;
}, 'Title cannot be blank');

CommentSchema.path('content').validate(function(content) {
  return content.length;
}, 'Content cannot be blank');

mongoose.model("Comment", CommentSchema);
