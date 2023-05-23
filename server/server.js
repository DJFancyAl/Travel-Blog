// Dependencies
const express = require('express')

const app = express()

// Routes
app.get('/', (req, res) => {
    res.json({message: "Home Page"})
})



// Listener
app.listen(3000, () => {
    console.log("Server Running on port 3000...")
})