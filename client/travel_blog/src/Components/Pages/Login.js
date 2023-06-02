import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Fade from 'react-bootstrap/Fade';

function Login( { setAuthor }) {
    const navigate = useNavigate()
    const [alert, setAlert] = useState({})
    const [open, setOpen] = useState(false)

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
        if(data.author){
            const {password, ...rest} = data.author
            setAuthor(rest)
            localStorage.setItem("token", data.token)
            localStorage.setItem("author", rest)
            setAlert({variant: 'success', message: `${data.author.username} is signing in!`})
            setOpen(true)
            setTimeout(() => navigate('/'), 800)
        }
        if(data.error){
            setAlert({variant: 'danger', message: data.error})
            setOpen(true)
            setTimeout(() => setOpen(false), 4000)
        }
    }

    return (
        <Container>
            <h1>Login:</h1>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Your Username..." required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Your Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                    <Fade in={open} className='mt-3'>
                        <div>
                            <Alert variant={alert.variant} onClose={() => setAlert({})}>{alert.message}</Alert>
                        </div>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}

export default Login