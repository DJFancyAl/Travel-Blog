import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/style.css";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import largeImage from "../images/largeImage.png";

function Home() {
  return (
    <Container>
      {/* New container */}
      <Container className="top-container">
        <img src={largeImage} alt="Large Image" />
      </Container>

      <Row>
        <Col sm={4}>
          <Container className="custom-container">
            <img src={image1} alt="Container 1" />
            <Link to="/blogs" className="container-link">
              TRAVEL BLOG
            </Link>
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

        .top-container {
          text-align: center;
          margin-bottom: 20px;
        }

        .top-container img {
          max-width: 100%;
          height: auto;
        }

        .container-link {
          color: #000;
          text-decoration: none;
          font-weight: bold;
        }
      `}
      </style>
    </Container>
  );
}

export default Home;
