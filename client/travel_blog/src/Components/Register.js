import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Register( { setAuthor }) {
    // State
    const [newAuthor, setNewAuthor] = useState({})
    const navigate = useNavigate()

    // Handle Change
    const handleChange = (e) => {
        const { id, value } = e.target
        setNewAuthor({
        ...newAuthor,
        [id]: value
        })
    }

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(newAuthor.password === newAuthor.confirmPassword) {
            const response = await fetch('http://localhost:3001/authors', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAuthor)
            })
            const data = await response.json()
            localStorage.setItem("token", data.token)
            localStorage.setItem("author", data.author)
            setAuthor(data.author)
            navigate(`/authors/profile`)
        }
    }

    return (
        <Container>
            <h1>Register New User:</h1>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Your Username..." onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Create Password" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
        </Container>
    )
}

export default Register