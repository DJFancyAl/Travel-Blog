import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/style.css";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

function Home() {
  return (
    <Container>
      <h1>Home Page</h1>
      <Row>
        <Col sm={4}>
          <Container className="custom-container">
            <img src={image1} alt="Container 1" />
            <p>TRAVEL BLOG</p>
          </Container>
        </Col>
        <Col sm={4}>
          <Container className="custom-container">
            <img src={image2} alt="Container 2" />
            <p>DESTINATION</p>
          </Container>
        </Col>
        <Col sm={4}>
          <Container className="custom-container">
            <img src={image3} alt="Container 3" />
            <p>FEATURED</p>
          </Container>
        </Col>
      </Row>
      <Link to="/blogs">Blogs Page</Link>
      <style>
        {`
        .custom-container {
          flex: 1;
        }
      `}
      </style>
    </Container>
  );
}

export default Home;
