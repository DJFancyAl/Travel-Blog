// Dependencies
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Controllers
app.use('/blogs', require('./controllers/blogs'))
app.use('/authors', require('./controllers/authors'))

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