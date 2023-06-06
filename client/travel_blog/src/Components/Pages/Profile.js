import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthorContext } from '../../Context/AuthorContext';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Fade from 'react-bootstrap/Fade';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { MdDelete, MdEditNote } from "react-icons/md";

function Profile() {
    const navigate = useNavigate()
    const { author, setAuthor} = useContext(AuthorContext)
    const [changes, setChanges] = useState({...author})
    const [alert, setAlert] = useState({})
    const [open, setOpen] = useState(false)
    const [showModal, setShowModal] = useState(false);

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
        const response = await fetch(`https://travel-blog-api.onrender.com/authors/${author._id}`, {
        method: "put",
        headers: {
            'Content-Type': 'application/json',
            "x-access-token": localStorage.getItem('token')
        },
        body: JSON.stringify(changes)
        })
        const data = await response.json()
        if(data.message){
            const updatedAuthor = {...author, ...changes}
            setAuthor(updatedAuthor)
            localStorage.setItem("author", JSON.stringify(updatedAuthor))
            setAlert({variant: 'success', message: data.message})
        }
        if(data.error){
            setAlert({variant: 'danger', message: data.error})
        }
        setOpen(true)
        setTimeout(() => setOpen(false), 4000)
    }

    // Delete Profile
    const deleteProfile = async () => {
        const response = await fetch(`https://travel-blog-api.onrender.com/authors/${author._id}`, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token": localStorage.getItem('token')
            }})
        const data = await response.json()
        if(data.message) {
            setAuthor({})
            localStorage.clear();
            navigate('/')
        }
        if(data.error) {
            setAlert({variant: 'danger', message: data.error})
            setOpen(true)
            setShowModal(false)
            setTimeout(() => setOpen(false), 4000)
        }
    }

    return (
        <Container>
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

                        <Button variant="primary" type="submit">Edit Profile <MdEditNote className='mb-1' size={20} /></Button>
                        <Button variant="danger" className='mx-3' onClick={() => setShowModal(true)}>Delete Profile <MdDelete className='mb-1' size={20} /></Button>
                    </Form>
                    <Fade in={open} className='mt-3'>
                        <div>
                            <Alert variant={alert.variant} onClose={() => setAlert({})}>{alert.message}</Alert>
                        </div>
                    </Fade>
                </Col>
                {author.pic &&
                <Col className='d-flex align-items-center p-5'>
                    <Image fluid className='shadow m-auto' src={author.pic} alt={author.username} />
                </Col>
                }
            </Row>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Delete {author.username}?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                This is your last chance! This will delete your profile and all associated information.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
                <Button variant="danger" onClick={deleteProfile}>Delete Forever</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Profile