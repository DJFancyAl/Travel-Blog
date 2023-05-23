// Dependencies
require('dotenv').config()
const router = require('express').Router()
const db = require('../models')

// Get All Posts
router.get('/', (req, res) => {
    res.status(200).json({message: "Gets all Posts"})
})

// Export
module.exports = router