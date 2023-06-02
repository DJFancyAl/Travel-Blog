// Dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// Comment Schema
const commentSchema = new Schema ({
    author: {type: Schema.Types.ObjectId, ref:'Author', required: true},
    blog: {type: Schema.Types.ObjectId, ref: 'Blog', required: true},
    title: {type: String}, required: true,
    body: String,
    date: { type : Date, default: Date.now },
});

// Export
module.exports = mongoose.model('Comment', commentSchema)
