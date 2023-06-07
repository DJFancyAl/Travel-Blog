import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { MdLogin, MdLogout, MdPersonAddAlt1, MdPerson2, MdOutlineAddCircle, MdHomeFilled, MdGroup, MdArticle, MdOutlineAccountCircle} from "react-icons/md";

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
      {/* new nav bar */}
      {author._id && (
            <Link to="/blog/new">
              <MdOutlineAddCircle size={45} className="icon-Add-Blog"/>
            </Link>
      )}
      <nav className="nav">
        <Link to="/" className="nav-link" >
          <MdHomeFilled size={25} className="nav-icon Home"/>
          <p class="nav-text">Home</p>
        </Link>

        <Link to="/authors"className="nav-link" >
          <MdGroup size={25} className="nav-icon Author"/>
          <p class="nav-text">Author</p>
        </Link>

        <Link to="/blogs" className="nav-link" >
          <MdArticle size={25} className="nav-icon Blogs"/>
          <p class="nav-text">Blogs</p>
        </Link>

        {author._id ? (
          <Link className="nav-link" to="./authors/profile">
            <MdOutlineAccountCircle size={25} className="nav-icon Account" />
            <p class="nav-text Username">Hello {author.username}!</p>
          </Link>
          ) : (
            <Link className="nav-link" to="./authors/profile">
              <MdOutlineAccountCircle size={25} className="nav-icon Register" />
              <p class="nav-text Register">Register</p>
            </Link>
          )
        }
      </nav>
    </Navbar>
  );
}

export default NavBar;