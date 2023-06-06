import { useState } from 'react';
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

function AuthorBlog({blog}) {
    // State
    const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
    const [hovered, setHovered] = useState(false)

    // Style
    const style = {
        transition: '0.4s',
        transform: !hovered ? 'scale(1.00)' : 'scale(1.03)',
        backgroundColor: !hovered ? '#2b5f57' : '#468e84'
    }

    return (
        <Link className='text-decoration-none' to={`/blog/${blog._id}`}>
            <ListGroup.Item style={style} className='border border-dark lead py-4 text-white' onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
                {blog.title} - {formattedDate}
            </ListGroup.Item>
        </Link>
    )
}

export default AuthorBlog