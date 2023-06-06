import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { AuthorContext } from '../../Context/AuthorContext';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Comment from '../Comment';
import NewComment from '../NewComment';
import { MdDelete, MdEditNote } from "react-icons/md";

function ShowBlog( { deleteBlog } ) {
  // States
  const {id} = useParams()
  const { author } = useContext(AuthorContext)
  const [blog, setBlog] = useState({comments: []})
  const navigate = useNavigate()
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric' })

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
    return <Comment key={comment._id} comment={comment} deleteComment={deleteComment} />
  })

  return (
    <Container className='mb-5'>
      <h1 onClick={() => console.log(blog)}>{blog.title}</h1>
      <p className='fst-italic'>{formattedDate}</p>
      {blog.author && <p className="lead">Written By: {blog.author.name}</p>}
      <div className='my-3 overflow-auto' style={{whiteSpace: 'pre-wrap'}}>{blog.pic && <Image className='ms-3 mb-3 shadow' style={{maxWidth: '50%'}} align='right' src={blog.pic} alt={blog.title} />}{blog.body}</div>
      
      {blog.author && blog.author._id === author._id && 
        <>
          <Link to={`/blog/edit/${blog._id}`}>
            <Button>Edit Blog <MdEditNote className='mb-1' size={20} /></Button>
          </Link>
          <Button className='mx-3' variant="danger" onClick={handleDelete}>Delete Blog <MdDelete className='mb-1' size={20} /></Button>
        </>}
      <hr />
      <Col xs={12} lg={8} className="m-auto">
        <h2 className="display-5 text-center">Comments</h2>
        {blog.comments[0] && <div className='border border-3 border-primary-subtle'>{comments}</div>}
        {author && <NewComment blog={id} addComment={addComment} />}
      </Col>
    </Container>
  )
}

export default ShowBlog