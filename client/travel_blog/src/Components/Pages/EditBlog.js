import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditBlog() {    
    // State
    const {id} = useParams()
    const navigate = useNavigate()
    const [editedBlog, setEditedBlog] = useState({})

    // Handle Change
    const handleChange = (e) => {
        const { id, value } = e.target
        setEditedBlog({
        ...editedBlog,
        [id]: value
        })
    }

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:3001/blogs/${id}`, {
        method: "put",
        headers: {
            'Content-Type': 'application/json',
            "x-access-token": localStorage.getItem('token')
        },
        body: JSON.stringify(editedBlog)
        })
        
        navigate(`/blog/${editedBlog._id}`)
    }

    // Fetch Blog
    useEffect(() => {
        async function getBlog() {
        const response = await fetch(`http://localhost:3001/blogs/${id}`)
        const data = await response.json();
        setEditedBlog(data)
        }

        getBlog()
    }, [id])

    return (
        <Container>
            <h1>Edit:</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control type="text" placeholder="Your title..." onChange={handleChange} value={editedBlog.title} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pic">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Your photo..." onChange={handleChange} value={editedBlog.pic} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="body">
                <Form.Label>Post Body</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder='Write your blog...' onChange={handleChange} value={editedBlog.body} />
                </Form.Group>

                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </Container>
    )
}

export default EditBlog