import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function NavBar() {
  const style= { color: 'inherit', textDecoration: 'inherit'}

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to='/' style={style}><Navbar.Brand>Milestone Travel Blog</Navbar.Brand></Link>
        <Nav className="me-auto">
        <Nav.Link as={NavLink} to='/blogs'>Blogs</Nav.Link>
        <Nav.Link as={NavLink} to='/blog/new'>Write Blog</Nav.Link>
        <Nav.Link as={NavLink} to='/authors'>Authors</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar