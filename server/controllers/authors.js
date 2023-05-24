// Dependencies
require('dotenv').config()
const router = require('express').Router()
const { Author } = require('../models')

// Get All Authors
router.get('/', async (req, res) => {
    try {
        const foundAuthors = await Author.find()
        res.status(200).json(foundAuthors)
    } catch (err) {
        res.status(400).json({error: err})
    }
})

// Author View
router.get('/:id', async (req, res) => {
    try{
        const foundAuthor = await Author.findById(req.params.id)
        res.status(200).json(foundAuthor)
    } catch (err) {
        res.status(400).json({error: err})
     }
})

// Create Author
router.post('/', async (req, res) => {
    try {
        const createdAuthor = await Author.create(req.body)
        res.status(200).json(createdAuthor)
     } catch (err) {
        res.status(400).json({error: err})
     }
})

// Update Author
router.put('/:id', async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({message: "Updated Author"})
    } catch (err) {
        res.status(400).json({error: err})
    }
})

// Delete Author
router.delete('/:id', async (req, res) => {
    try {
        const deletedBAuthor = await Author.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Author Deleted!"})
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