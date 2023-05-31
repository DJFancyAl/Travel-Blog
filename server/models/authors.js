// Dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt');



// Author Schema
const authorSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        default: 'Anonymous'
    },
    password: {type: String, minlength: 6, required: true},
    bio: String,
    pic: String
});


// Create a password salt
authorSchema.pre('save', function(next) {
  const author = this;
  
  // Only hash the password if it has been modified (or is new)
  if (!author.isModified('password')) {
    return next();
  }
  
  // Generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    
    // Hash the password using the salt
    bcrypt.hash(author.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      
      // Override the cleartext password with the hashed one
      author.password = hash;
      next();
    });
  });
  });


// Export
module.exports = mongoose.model('Author', authorSchema)