// Dependencies
require('dotenv').config()
const express = require('express')

const app = express()

// Home Route
app.get('/', (req, res) => {
    res.status(200).json({message: "Home Page"})
})

// Wildcard Route
app.get('*', (req, res) => {
    res.status(404).json({error: 'error404'})
})

// Listener
app.listen(3000, () => {
    console.log("Server Running on port 3000...")
})