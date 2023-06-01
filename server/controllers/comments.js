// require('dotenv').config()
// const router = require('express').Router()
// const {Blog, Author, Comment} = require('../models')

// router.get('/:id', async (req, res) =>{
//     try{
//         const foundComment = await Comment.findById(req.params.id).populate('author', ['name'])
        
//         res.status(200).json(foundComment)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })

// router.post('/', async (req,res) =>{
//     console.log('posted')
//     try {
//         const createComment = await Comment.create(req.body)
//         res.status(200).json(createComment)
//     } 
//     catch(err){
//         res.status(500).json(err)
//     }
// })

// module.exports = router