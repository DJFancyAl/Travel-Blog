<<<<<<< HEAD
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/blogs`}>Blogs Page</Link>
    </div>
  );
=======
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <Container>
        <h1>Home Page</h1>
        <Link to={`/blogs`}>Blogs Page</Link>
    </Container>
  )
>>>>>>> b0ba639f892737576b1ca564c3d5a833f37298e6
}

export default Home;
