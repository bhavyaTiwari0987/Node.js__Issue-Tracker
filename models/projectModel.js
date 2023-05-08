const mongoose = require("mongoose");

// CREATE SCHEMA
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  },
  author: {
    type: String,
    required: [true, "please provide author name"],
  },
  issues: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Issue'
    }
  ]
});

// CREATE MODEL
const Project = mongoose.model("Project", projectSchema);

// EXPORT MODEL
module.exports = Project;
