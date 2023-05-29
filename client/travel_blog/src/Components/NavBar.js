<<<<<<< HEAD
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
=======
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function NavBar( { author, setAuthor } ) {
  const navigate = useNavigate()
  const style= { color: 'inherit', textDecoration: 'inherit'}

  // Logout
  const logout = () => {
    setAuthor({})
    localStorage.clear();
    navigate('/')
  }
>>>>>>> b0ba639f892737576b1ca564c3d5a833f37298e6

  return (
    <Navbar bg="dark" variant="dark">
<<<<<<< HEAD
      <Container>
        <Navbar.Brand href="#home">MS Travel Blog</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
=======
      <Container className='justify-content-between'>
        <div className='d-flex align-items-center'>
          <Link to='/' style={style}><Navbar.Brand>Milestone Travel Blog</Navbar.Brand></Link>
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/blogs'>Blogs</Nav.Link>
          <Nav.Link as={NavLink} to='/authors'>Authors</Nav.Link>
          {author._id && <Nav.Link as={NavLink} to='/blog/new'>Write Blog</Nav.Link>}
          </Nav>
        </div>
        {author._id ?
          <div className='d-flex align-items-center'>
            <Button className='mx-3' as={Link} to='./authors/profile'>Hello {author.username}!</Button>
            <Button onClick={logout}>Logout</Button>
          </div>
          :
          <div className='d-flex align-items-center'>
            <Button className='mx-3' as={Link} to='./authors/register'>Register</Button>
            <Button as={Link} to='./authors/login'>Login</Button>
          </div>
          }
      </Container>
    </Navbar>
  )
>>>>>>> b0ba639f892737576b1ca564c3d5a833f37298e6
}

export default NavBar;
