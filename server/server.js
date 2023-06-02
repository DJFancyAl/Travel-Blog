// Dependencies
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Middleware
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, x-access-token, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Controllers
app.use('/blogs', require('./controllers/blogs'))
app.use('/authors', require('./controllers/authors'))
// app.use('/comments', require('./controllers/comments'))

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