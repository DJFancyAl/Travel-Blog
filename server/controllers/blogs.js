// Dependencies
require('dotenv').config()
const router = require('express').Router()
const {Blog} = require('../models')

// Get All Blogs
router.get('/', async (req, res) => {
    try {
        const foundBlogs = await Blog.find()
        res.status(200).json(foundBlogs)
    } catch (err) {
        res.status(400).json({error: err})
    }
})

// Blog View
router.get('/:id', (req, res) => {
    res.status(200).json({message: "View One Blog"})
})

// Create Blog
router.post('/', async (req, res) => {
    try {
        const createdBlog = await Blog.create(req.body)
        res.status(200).json(createdBlog)
     } catch (err) {
        res.status(400).json({error: err})
     }
})

// Update Blog
router.put('/:id', (req, res) => {
    res.status(200).json({message: "Update Post"})
})
// Delete Blog
router.delete('/:id', (req, res) => {
    res.status(200).json({message: "Deletes Post"})
})

// Wildcard
router.delete('*', (req, res) => {
    res.status(404).json({error: "Page not found."})
})


// Export
module.exports = router