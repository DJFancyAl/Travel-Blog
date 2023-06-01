import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Profile( { author, setAuthor} ) {
    const navigate = useNavigate()
    const [changes, setChanges] = useState({...author})
    const [alert, setAlert] = useState({})

    // Handle Change
    const handleChange = (e) => {
        const { id, value } = e.target
        setChanges({
        ...changes,
        [id]: value
        })
    }

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:3001/authors/${author._id}`, {
        method: "put",
        headers: {
            'Content-Type': 'application/json',
            "x-access-token": localStorage.getItem('token')
        },
        body: JSON.stringify(changes)
        })
        const data = await response.json()
        if(data.message){
            setAuthor({
                ...author,
                ...changes
            })
            setAlert({variant: 'success', message: data.message})
        }
        if(data.error){
            setAlert({variant: 'danger', message: data.error})
        }
        setTimeout(() => setAlert({}), 3000)
    }

    // Logout
    const logout = () => {
        setAuthor({})
        localStorage.clear();
        navigate('/')
    }

    return (
        <Container>
            {alert.variant && <Alert variant={alert.variant} onClose={() => setAlert({})} dismissible>{alert.message}</Alert>}
            <Row>
                <Col xs={12} lg={6}>
                    <h1>Profile</h1>
                    <h3>{author.username}</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Change Username</Form.Label>
                        <Form.Control type="text" placeholder="Your login username..." onChange={handleChange} value={changes.username} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Change Display Name</Form.Label>
                        <Form.Control type="text" placeholder="The name other users will see..." onChange={handleChange} value={changes.name} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="pic">
                        <Form.Label>Change Image URL</Form.Label>
                        <Form.Control type="text" placeholder="Your photo..." onChange={handleChange} value={changes.pic} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="bio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder='Tell us about you...' onChange={handleChange} value={changes.bio} />
                        </Form.Group>

                        <Button variant="primary" type="submit">Edit Profile</Button>
                        <Button variant="secondary" className='mx-3' onClick={logout}>Log Out</Button>
                    </Form>
                </Col>
                {author.pic &&
                <Col>
                    <img src={author.pic} alt={author.username} />
                </Col>
                }
            </Row>
            
        </Container>
    )
}

export default Profile