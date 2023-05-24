// Dependencies
require('dotenv').config()
const router = require('express').Router()
const {Post} = require('../models')

// Get All Posts
router.get('/', async (req, res) => {
    try {
        const foundPosts = await Post.find()
        res.status(200).json(foundPosts)
    } catch (err) {
        res.status(400).json({error: err})
    }
})

// Post View
router.get('/:id', (req, res) => {
    res.status(200).json({message: "View One Post"})
})

// Create Post
router.post('/', async (req, res) => {
    try {
        const createdPost = await Post.create(req.body)
        res.status(200).json({message: "Creates Post"})
     } catch (err) {
        res.status(400).json({error: err})
     }
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