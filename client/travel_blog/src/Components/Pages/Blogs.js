import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
        <h1 className='display-5 mb-4'>View All Blogs</h1>
        <Row className='justify-content-center g-4 mb-5 p-0'>{blogList}</Row>
    </Container>
  )
}

export default Blogs