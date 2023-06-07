import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import '../css/style.css'

function Post({ blog }) {
  return (
    <Container>
      <div className="cardBody">
        {blog.pic && (
          <div className="img-container">
            <img src={blog.pic} alt={blog.title}></img>
          </div>
        )}

        <div className="card-title">
          <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
          <div className="author">
            <Link>
              <h7>
                {blog.author.name} 
              </h7>
            </Link>
          </div>
          <div className="blogdate">{blog.date}</div>
        </div>
        
        <div className="excerpt">
          <p>{blog.body.substring(0, 250)} . . .</p>
        </div>
        
        {/* <hr style="height:2px;border-width:0;color:gray;background-color:gray"></hr> */}
      </div>
      
    </Container>
  );
}

export default Post;