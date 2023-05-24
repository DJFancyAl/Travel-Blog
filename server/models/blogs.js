const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, default: 'Anonymous'},
    pic: {type: String}, 
    date: {type:Date},
    body: {type: String, required: true}
});

module.exports = mongoose.model('Blog', blogSchema)