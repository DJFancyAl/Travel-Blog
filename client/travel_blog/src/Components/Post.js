import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Post({blog}) {
  return (
    <Container>
        <div className="card">
            <div className="card-image">
                <img src={blog.pic} alt=""></img>
            </div>

            <div className="card-context">
                Content of the post
            </div>

            <div className="info">
                <Link className="author">Author</Link>
                <p>{blog.date}</p>
            </div>
        </div>
    </Container>
  )
}

export default Post