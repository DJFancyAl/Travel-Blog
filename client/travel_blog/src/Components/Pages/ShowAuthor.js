import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

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
        return <Link to={`/blog/${blog._id}`}><ListGroup.Item>{blog.title} - {formattedDate}</ListGroup.Item></Link>
    })

  return (
    <Container>
        <h1 className='display-4'>{shownAuthor.name}</h1>
        {shownAuthor.pic && <Image src={shownAuthor.pic} alt={shownAuthor.name} />}
        {shownAuthor.bio && <p>{shownAuthor.bio}</p>}
        {shownAuthor.blogs && 
        <div className='text-center mt-5'>
            <hr />
            <h3 className='display-5'>Blogs</h3>
            <ListGroup>
                {blogList}
            </ListGroup>
        </div>
        }
    </Container>
  )
}

export default ShowAuthor