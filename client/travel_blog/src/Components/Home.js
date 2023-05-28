import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <Container>
        <h1>Home Page</h1>
        <Link to={`/blogs`}>Blogs Page</Link>
    </Container>
  )
}

export default Home