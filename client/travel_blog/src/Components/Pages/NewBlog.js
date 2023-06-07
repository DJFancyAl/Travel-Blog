import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MdNoteAdd } from "react-icons/md";
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

function NewBlog({ author, addBlog }) {
  // State
  const navigate = useNavigate()
  const [newBlog, setNewBlog] = useState({
    author: author
  })

  //Quill Things
  // const [value, setValue] = useState('');
  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ header: [1, 2, 3, 4, 5, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],
      ['clean'],
    ],
  };

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
      <h1>Create a New Blog</h1>
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

        {/* <ReactQuill controlId="content" modules={modules}/> */}


        <Button variant="primary" type="submit">
          Add Blog <MdNoteAdd className='mb-1' size={20} />
        </Button>
      </Form>
    </Container>
  )
}

export default NewBlog