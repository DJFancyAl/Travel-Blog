import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewBlog() {
  // State
  const navigate = useNavigate()
  const [newBlog, setNewBlog] = useState({})

  // Handle Change
  const handleChange = (e) => {
    const { id, value } = e.target
  
    setNewBlog({
      ...newBlog,
      [id]: value
    })
  }

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3001/blogs', {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          "title": newBlog.title,
          "pic": newBlog.pic,
          "body": newBlog.body
        }
      )
    })
    const data = await response.json()
    navigate(`/blogs/${data._id}`)
  }

  return (
    <>
      <h1>Create a New Blog</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control type="text" placeholder="Your title..." onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pic">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Your photo..." onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="body">
          <Form.Label>Post Body</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder='Write your blog...' onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default NewBlog