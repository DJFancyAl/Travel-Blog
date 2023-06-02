import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Comment from '../Comment';
import NewComment from '../NewComment';

function ShowBlog( { author } ) {
  // States
  const {id} = useParams()
  const [blog, setBlog] = useState({comments: []})

  // Fetch Blog
  useEffect(() => {
    async function getBlog() {
      const response = await fetch(`http://localhost:3001/blogs/${id}`)
      const data = await response.json();
      
      setBlog(data)
    }

    getBlog()
  }, [id])

  // Comments
  const comments = blog.comments.map(comment => {
    return <Comment key={comment._id} comment={comment} />
  })

  // Add Comment
  const addComment = (comment) => {
    setBlog({
      ...blog,
      comments: [...blog.comments, comment]
    })
  }

  return (
    <Container className='mb-5'>
      <h1 onClick={() => console.log(blog)}>{blog.title}</h1>
      {blog.author && <p className="lead">Written By: {blog.author.name}</p>}
      {blog.pic && <img src={blog.pic} alt={blog.title} />}
      <div className='my-3' style={{whiteSpace: 'pre-wrap'}}>{blog.body}</div>
      {blog.author && blog.author._id === author && <Link to={`/blog/edit/${blog._id}`}><Button>Edit Blog</Button></Link>}
      <hr />
      <Col xs={12} md={8} className="m-auto">
        <h2 className="display-5 text-center">Comments</h2>
        <div className='border border-3 border-primary-subtle'>
          {comments}
        </div>
        {author && <NewComment blog={id} author={author} addComment={addComment} />}
      </Col>
    </Container>
  )
}

export default ShowBlog