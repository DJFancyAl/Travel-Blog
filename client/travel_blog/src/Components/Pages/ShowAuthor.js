import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import styles from '../../CSS/ShowAuthor.module.css'

function ShowAuthor() {
    // States
    const {id} = useParams()
    const [shownAuthor, setShownAuthor] = useState({comments: [], blogs: []})
    const navigate = useNavigate()

    // Fetch Blog
    useEffect(() => {
        async function getShownAuthor() {
        const response = await fetch(`http://localhost:3001/authors/${id}`)
        const data = await response.json();
        setShownAuthor(data)
        }

        getShownAuthor()
    }, [id])

    // Create the blog list
    const blogList = shownAuthor.blogs.map(blog => {
        const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
        return <Link className='text-decoration-none' to={`/blog/${blog._id}`}><ListGroup.Item className={styles.blog + ' border border-light fw-bold lead py-4'}>{blog.title} - {formattedDate}</ListGroup.Item></Link>
    })

  return (
    <Container>
        <Row className='align-items-center'>
            <Col>
                <h1 className='display-4'>{shownAuthor.name}</h1>
                {shownAuthor.bio && <p className='lead' style={{whiteSpace: 'pre-wrap'}}>{shownAuthor.bio}</p>}
            </Col>
            {shownAuthor.pic && 
            <Col xs={12} lg={6} className='text-center'>
                <Image className='shadow' src={shownAuthor.pic} alt={shownAuthor.name} />
            </Col>}
        </Row>
        {shownAuthor.blogs[0] && 
        <div className='text-center mt-5'>
            <hr />
            <h3 className='display-5'>Blogs</h3>
            <ListGroup className="bg-primary my-4 shadow">
                {blogList}
            </ListGroup>
        </div>
        }
    </Container>
  )
}

export default ShowAuthor