const mongoose = require('mongoose')
const { Schema } = mongoose



const commentSchema = new Schema ({
    author: {type: mongoose.Schema.Types.ObjectId, ref:'Author', required: true},
    blog: {type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true},
    body: {type: String},
    date: {type : Date, default: Date.now}
});

module.exports = mongoose.model('Comment', commentSchema)
