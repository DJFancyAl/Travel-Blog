import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { MdNoteAdd } from "react-icons/md";
import GrowButton from '../GrowButton'

function NewBlog({ author, addBlog }) {
  // State
  const navigate = useNavigate()
  const [newBlog, setNewBlog] = useState({
    author: author
  })

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
    const newId = await addBlog(newBlog)
    navigate(`/blog/${newId}`)
  }

  return (
    <Container>
      <Col className='m-auto' xs={12} xl={8}>
        <h1 className='mb-4 display-5'>Create a New Blog</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control type="text" placeholder="Your title..." onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pic">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Your photo..." onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="body">
            <Form.Label>Post Body</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder='Write your blog...' onChange={handleChange} required />
          </Form.Group>

          <GrowButton variant='primary' type='submit' start='120px'>
            Add Blog <MdNoteAdd className='mb-1' size={20} />
          </GrowButton>
        </Form>
      </Col>
    </Container>
  )
}

export default NewBlog