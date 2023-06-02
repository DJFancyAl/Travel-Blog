// Dependencies
require('dotenv').config()
const mongoose = require('mongoose')

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(()=>console.log('MongoDB connected'))
.catch(e=>console.log(e));

// Exports
module.exports.Blog = require('./blogs.js')
module.exports.Author = require('./authors.js')
module.exports.Comment = require('./comments.js')