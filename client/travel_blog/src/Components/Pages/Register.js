import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Fade from 'react-bootstrap/Fade';
import { MdPlayArrow } from "react-icons/md";
import styles from '../../CSS/Button.module.css'

function Register( { setAuthor }) {
    // State
    const [newAuthor, setNewAuthor] = useState({})
    const [alert, setAlert] = useState({})
    const [open, setOpen] = useState(false)
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

        const response = await fetch('http://localhost:3001/authors', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAuthor)
        })
        const data = await response.json()
        if(data.author) {
            localStorage.setItem("token", data.token)
            localStorage.setItem("author", data.author)
            setAuthor(data.author)
            setAlert({variant: 'success', message: `${data.author.username} account created!`})
            setOpen(true)
            setTimeout(() => navigate(`/authors/profile`), 1500)
        }
        if(data.error) {
            setAlert({variant: 'danger', message: data.error})
            setOpen(true)
            setTimeout(() => setOpen(false), 3000)
        }
    }

    return (
        <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <h1 className='mb-5 display-5'>Register:</h1>
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

                        <Button className={styles.btn} variant="primary" type="submit">
                            Register <MdPlayArrow className='mb-1' size={16} />
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

export default Register