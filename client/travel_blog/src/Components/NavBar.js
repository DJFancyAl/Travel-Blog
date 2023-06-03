import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { MdLogin, MdLogout, MdPersonAddAlt1, MdPerson2 } from "react-icons/md";

function YourComponent() {
  const style = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.5rem",
  };
}

function NavBar({ author, setAuthor }) {
  const navigate = useNavigate();
  const style = { color: "inherit", textDecoration: "inherit" };

  // Logout
  const logout = () => {
    setAuthor({});
    localStorage.clear();
    navigate("/");
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-between">
        <div className="d-flex align-items-center">
          <Link to="/" style={style}>
            <Navbar.Brand>Milestone Travel Blog</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/authors">
              Authors
            </Nav.Link>
            {author._id && (
              <Nav.Link as={NavLink} to="/blog/new">
                Write Blog
              </Nav.Link>
            )}
          </Nav>
        </div>
        {author._id ? (
          <div className="d-flex align-items-center">
            <Button className="mx-3" as={Link} to="./authors/profile">
              Hello {author.username}! <MdPerson2 className="mb-1" size={18} />
            </Button>
            <Button onClick={logout}>Logout <MdLogout className="mb-1" size={18} /></Button>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <Button className="mx-3" as={Link} to="./authors/register">
              Register <MdPersonAddAlt1 className="mb-1" size={18} />
            </Button>
            <Button as={Link} to="./authors/login">
              Login <MdLogin size={20} />
            </Button>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
