// Dependencies
require('dotenv').config()
const express = require('express')

const app = express()

// Controller
app.use('/posts', require('./controllers/posts'))

// Home Route
app.get('/', (req, res) => {
    res.status(200).json({message: "Home Page"})
})

// Wildcard Route
app.get('*', (req, res) => {
    res.status(404).json({error: 'error404'})
})

// Listener
app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}...`)
})