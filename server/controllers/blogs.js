// Dependencies
require('dotenv').config()
const router = require('express').Router()
const {Blog, Author} = require('../models')

// Get All Blogs
router.get('/', async (req, res) => {
    try {
        const foundBlogs = await Blog.find()
        const foundAuthors = await Author.find()
        res.status(200).json({blogs: foundBlogs, authors: foundAuthors})
    } catch (err) {
        res.status(400).json({error: err})
    }
})

// Blog View
router.get('/:id', async (req, res) => {
    console.log('hit')
    try{
        const foundBlog = await Blog.findById(req.params.id)
        res.status(200).json(foundBlog)
    } catch (err) {
        res.status(400).json({error: err})
    }
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
router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({message: "Updated Blog"})
    } catch (err) {
        res.status(400).json({error: err})
    }
})

// Delete Blog
router.delete('/:id', async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Blog Deleted!"})
    } catch (err) {
        res.status(400).json({error: err})
     }
})

// Wildcard
router.get('*', (req, res) => {
    res.status(404).json({error: "Page not found."})
})


// Export
module.exports = router