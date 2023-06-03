import Container from 'react-bootstrap/Container';
import Post from '../Post';

function Blogs( { blogs } ) {
    
  // Create the Blog List
  const blogList = blogs.map(blog => {
    return (
      <Post key={blog._id} blog={blog} />
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