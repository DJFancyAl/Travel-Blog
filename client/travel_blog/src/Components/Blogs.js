import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

function Blogs( { blogs } ) {
  
  // Create the Blog List
  const blogList = blogs.map(blog => {
    return (
      <div key={blog._id}>
        <hr />
        <h3>{blog.title}</h3>
        {blog.pic && <img src={blog.pic} alt={blog.title} height={300} />}
        <p>{blog.body.slice(0, 200)}</p>
        <Link to={`/blogs/${blog._id}`}>Read More</Link>
      </div>

      
    )
  }) 

  return (
    <Container>
        <h1>View All Blogs</h1>
        {blogList}
    </Container>
  )
}

export default Blogs