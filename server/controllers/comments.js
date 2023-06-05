// Dependencies
const router = require('express').Router()
const {validateToken} = require('../JWT')
const {Blog, Comment} = require('../models')

// Create Comment
router.post('/', validateToken, async (req,res) =>{
    try {
        const createdComment = await Comment.create(req.body)
        await createdComment.populate('author', ['name', 'pic']);
        const updatedBlog = await Blog.findById(createdComment.blog)
        updatedBlog.comments.push(createdComment._id)
        updatedBlog.save()
        res.status(200).json(createdComment)
    } 
    catch(err){
        res.status(500).json(err)
    }
})

// Delete Comment
router.delete('/:id', validateToken, async (req, res) => {
    try{
        const deletedComment = await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'Deleted comment'})
    }catch(err){
        res.status(500).json(err)
    }
    
})
// Export
module.exports = router