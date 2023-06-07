import { useContext } from 'react'
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { AuthorContext } from "../Context/AuthorContext";
import { useNavigate } from "react-router-dom";
import { MdLogin, MdLogout, MdPersonAddAlt1, MdPerson2 } from "react-icons/md";
import travelBlogLogo from '../images/travel-blog-logo.png'

function NavBar() {
  // State
  const navigate = useNavigate();
  const {author, setAuthor} = useContext(AuthorContext)

  // Logout
  const logout = () => {
    setAuthor({});
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
                alt="Travel Blog Logo"
                src={travelBlogLogo}
                width="30"
                height="30"
                className="d-inline-block align-top me-3"
              />
            Milestone Travel Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={NavLink} to="/authors">Authors</Nav.Link>
            {author._id && <Nav.Link as={NavLink} to="/blog/new">Write Blog</Nav.Link>}
          </Nav>
          {author._id ? <Nav>
            <div>
              <Button className='me-3' as={Link} to="./authors/profile">Hello {author.username}! <MdPerson2 className="mb-1" size={18} /></Button>
              <Button onClick={logout}>Logout <MdLogout className="mb-1" size={18} /></Button>
            </div>
          </Nav>
          :
          <Nav>
            <div>
              <Button className='me-3' as={Link} to="./authors/register">Register <MdPersonAddAlt1 className="mb-1" size={18} /></Button>
              <Button as={Link} to="./authors/login">Login <MdLogin size={20} /></Button>
            </div>
          </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
