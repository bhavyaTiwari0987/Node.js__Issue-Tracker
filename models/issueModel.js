const mongoose = require('mongoose');

// CREATE SCEHEMA
const issueSchema = new mongoose.Schema({
    issue: {
        type: String,
        required: [true, 'Please provide issue']
    },
    description: {
        type: String,
        required: [true, 'Please provide description']
    },
    labels: [String],
    author: {
        type: String,
        required: [true, 'Please provide author name.']
    }
})
// CREATE MODEL
const Issue = mongoose.model('Issue' , issueSchema);

// EXPORT MODEL
module.exports = Issue;