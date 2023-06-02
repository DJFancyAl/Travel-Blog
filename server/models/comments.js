// Dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// Comment Schema
const commentSchema = new Schema ({
    author: {type: Schema.Types.ObjectId, ref:'Author', required: true},
    blog: {type: Schema.Types.ObjectId, ref: 'Blog', required: true},
    date: { type : Date, default: Date.now },
    title: {type: String, required: true},
    body: String,
});

// Export
module.exports = mongoose.model('Comment', commentSchema)
