const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, default: 'Anonymous'},
    pic: {type: String}, 
    date: { type : Date, default: Date.now },
    body: {type: String, required: true},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Blog', blogSchema)