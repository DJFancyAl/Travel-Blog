// Dependencies
require('dotenv').config()
const {sign, verify} = require('jsonwebtoken')

// Create Token Function
const createToken = (id) => {
    const accessToken = sign({id}, process.env.JWT_SECRET, {
        expiresIn: 2592000000 // 30 Days
    })
    return accessToken
}

// Validate Token Function
const validateToken = (req, res, next) => {
    const accessToken = req.headers["x-access-token"]

    if(!accessToken) return res.status(400).json({auth: false, error: "User not Authenticated"})

    try {
        const validToken = verify(accessToken, process.env.JWT_SECRET)
        if(validToken) {
            return next()
        }
    } catch (err) {
        return res.status(400).json({auth: false, error: err})
    }
}

module.exports = {createToken, validateToken}