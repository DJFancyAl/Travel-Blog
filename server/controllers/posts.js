// Dependencies
require('dotenv').config()
const router = require('express').Router()
const db = require('../models')

// Get All Posts
router.get('/', (req, res) => {
    res.status(200).json({message: "Gets all Posts"})
})

// Post View
router.get('/:id', (req, res) => {
    res.status(200).json({message: "View One Post"})
})

// Create Post
router.get('/', (req, res) => {
    res.status(200).json({message: "Creates Post"})
})

// Update Post
router.put('/:id', (req, res) => {
    res.status(200).json({message: "Update Post"})

// Delete Post
router.delete('/:id', (req, res) => {
    res.status(200).json({message: "Deletes Post"})
})

// Wildcard
router.delete('*', (req, res) => {
    res.status(404).json({error: "Page not found."})
})


// Export
module.exports = router