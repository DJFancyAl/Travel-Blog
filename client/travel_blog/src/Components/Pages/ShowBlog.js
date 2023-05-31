import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function ShowBlog() {
  // States
  const {id} = useParams()
  const [blog, setBlog] = useState({})

  useEffect(() => {
    async function getBlog() {
      const response = await fetch(`http://localhost:3001/blogs/${id}`)
      const data = await response.json();
      setBlog(data)
    }

    getBlog()
  }, [id])

  return (
    <Container>
      <h1>{blog.title}</h1>
      <p class="lead">Written By: {blog.author}</p>
      {blog.pic && <img src={blog.pic} alt={blog.title} />}
      <p>{blog.body}</p>
      <Link to={`/blogs/edit/${blog._id}`}><Button>Edit Blog</Button></Link>
    </Container>
  )
}

export default ShowBlog