import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Post({ blog }) {
  return (
    <Container>
      <div className="card">
        {blog.pic && (
          <div className="card-image">
            <img src={blog.pic} alt={blog.title}></img>
          </div>
        )}

        <div className="card-context">
          <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
        </div>

        <div className="info">
          <Link className="author">{blog.author}</Link>
          <p>{blog.date}</p>
        </div>
      </div>
    </Container>
  );
}

export default Post;
