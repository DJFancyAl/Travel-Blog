import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function ShowBlog( { author } ) {
  // States
  const {id} = useParams()
  const [blog, setBlog] = useState({})

  // Fetch Blog
  useEffect(() => {
    async function getBlog() {
      const response = await fetch(`http://localhost:3001/blogs/${id}`)
      const data = await response.json();
      
      setBlog(data)
    }

    getBlog()
  }, [])

  return (
    <Container>
      <h1>{blog.title}</h1>
      {blog.author && <p className="lead">Written By: {blog.author.name}</p>}
      {blog.pic && <img src={blog.pic} alt={blog.title} />}
      <p>{blog.body}</p>
      {blog.author && blog.author._id == author && <Link to={`/blog/edit/${blog._id}`}><Button>Edit Blog</Button></Link>}
    </Container>
  )
}

export default ShowBlog