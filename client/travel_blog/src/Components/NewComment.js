import { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdNoteAdd } from "react-icons/md";

function NewComment( {author, blog, addComment} ) {
    // State
    const [comment, setComment] = useState({
        author: author,
        blog: blog,
        title: '',
        body: ''
    })

    // Handle Change
    const handleChange = (e) => {
        const { id, value } = e.target
        setComment({
        ...comment,
        [id]: value
        })
    }

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:3001/comments`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
        })
        const data = await response.json()
        addComment(data)
        setComment({author: author, blog: blog, title: '', body: ''})
    }

    return (
        <Col xs={12} className='m-auto'>
            <hr />
            <h5>New Comment</h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Comment Title..." value={comment.title} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="body">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" placeholder="Write your comment..." rows={3} value={comment.body} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Comment <MdNoteAdd className='mb-1' size={20} />
                </Button>
            </Form>
        </Col>
    )
}

export default NewComment