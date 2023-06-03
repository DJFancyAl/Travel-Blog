import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Comment from '../Comment';
import NewComment from '../NewComment';

function ShowBlog( { author, deleteBlog } ) {
  // States
  const {id} = useParams()
  const [blog, setBlog] = useState({comments: []})
  const navigate = useNavigate()

  // Fetch Blog
  useEffect(() => {
    async function getBlog() {
      const response = await fetch(`http://localhost:3001/blogs/${id}`)
      const data = await response.json();
      
      setBlog(data)
    }

    getBlog()
  }, [id])
  
  // Add Comment
  const addComment = (comment) => {
    setBlog({
      ...blog,
      comments: [...blog.comments, comment]
    })
  }
  
  // Delete Comment
  const deleteComment = (commentId) => {
    setBlog({
      ...blog,
    comments: blog.comments.filter(comment => comment._id !== commentId)
    })
  }
  
  // Delete Blog
  const handleDelete = async () => {
    await deleteBlog(blog._id)
    navigate('/blogs')
  }
  
  // Comments
  const comments = blog.comments.map(comment => {
    return <Comment key={comment._id} comment={comment} currentAuthor={author} deleteComment={deleteComment} />
  })

  return (
    <Container className='mb-5'>
      <h1 onClick={() => console.log(blog)}>{blog.title}</h1>
      {blog.author && <p className="lead">Written By: {blog.author.name}</p>}
      {blog.pic && <img src={blog.pic} alt={blog.title} />}
      <div className='my-3' style={{whiteSpace: 'pre-wrap'}}>{blog.body}</div>
      {blog.author && blog.author._id === author && 
        <>
          <Link to={`/blog/edit/${blog._id}`}>
            <Button>Edit Blog</Button>
          </Link>
          <Button className='mx-3' variant="danger" onClick={handleDelete}>Delete Blog</Button>
        </>}
      <hr />
      <Col xs={12} md={8} className="m-auto">
        <h2 className="display-5 text-center">Comments</h2>
        {blog.comments[0] && <div className='border border-3 border-primary-subtle'>{comments}</div>}
        {author && <NewComment blog={id} author={author} addComment={addComment} />}
      </Col>
    </Container>
  )
}

export default ShowBlog