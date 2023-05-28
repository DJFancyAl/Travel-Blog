// Dependencies
// require('dotenv').config()
const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {createToken, validateToken} = require('../JWT')
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
    const {username, password} = req.body

    // Check if username and password is provided
    if (!username || !password) {
        return res.status(400).json({message: "Username or Password not present"})
    }
    
    // Check Password Length
    if (password.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters" })
    }

    try {
        const createdAuthor = await Author.create({username, password})
        const id = createdAuthor._id.valueOf()    
        const token = createToken(id)
        res.status(200).json({token: token, author: {
            _id: createdAuthor._id,
            username: createdAuthor.username,
            name: createdAuthor.name
        }})
     } catch (err) {
        res.status(400).json({error: err})
     }
})


// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body

    // Check if username and password is provided
    if (!username || !password) {
        return res.status(400).json({message: "Username or Password not present"})
    }

    try {
        // Get the author
        const author = await Author.findOne({username})

        // Check if author exists
        if (!author) res.status(401).json({auth: false, error: "Login not succesful - Author not found."})

        // Validate Password
        const validPassword = await bcrypt.compare(password, author.password)
        if (!validPassword) {
            res.status(401).json({auth: false, error: "Login not successful - Invalid Password."})
        } else {
            const id = author._id.valueOf()    
            const token = createToken(id)
        
            res.status(200).json({token: token, author: author})
        }
    } catch (err) {
        res.status(400).json({
            auth: false,
            error: err
        })
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
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id)
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