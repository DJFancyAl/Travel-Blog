import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Login( { setAuthor }) {
    const navigate = useNavigate()

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:3001/authors/login`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: e.target.querySelector('#username').value,
            password: e.target.querySelector('#password').value
            })
        })
        const data = await response.json()
        const {password, ...rest} = data.author
        setAuthor(rest)
        localStorage.setItem("token", data.token)
        localStorage.setItem("author", rest)
        navigate('/')
    }

    return (
        <Container>
            <h1>Login:</h1>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Your Username..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Your Password" />
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

export default Login