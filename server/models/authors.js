const mongoose = require('mongoose')
const { Schema } = mongoose

const authorSchema = new Schema({
    name: {
        type: String,
        unique: true,
        default: 'Anonymous'
    },
    bio: String,
    pic: String
});

module.exports = mongoose.model('Author', authorSchema)