import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/style.css"; // Update the path to the CSS file

import image4 from "../../../src/images/image4.jpg"; // Update the path to image4
import image5 from "../../../src/images/image5.jpg"; // Update the path to image5
import image6 from "../../../src/images/image6.jpg"; // Update the path to image6
import image7 from "../../../src/images/image7.jpg"; // Update the path to image7
import image8 from "../../../src/images/image8.jpg"; // Update the path to image8
import image9 from "../../../src/images/image9.jpg"; // Update the path to image9

function Destination() {
  return (
    <Container>
      <h1>Destination Page</h1>
      <Row>
        <Col sm={4}>
          <Container className="custom-container">
            <img src={image4} alt="Destination 4" />
            <p>Destination 4</p>
          </Container>
        </Col>
        <Col sm={4}>
          <Container className="custom-container">
            <img src={image5} alt="Destination 5" />
            <p>Destination 5</p>
          </Container>
        </Col>
        <Col sm={4}>
          <Container className="custom-container">
            <img src={image6} alt="Destination 6" />
            <p>Destination 6</p>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Container className="custom-container">
            <img src={image7} alt="Destination 7" />
            <p>Destination 7</p>
          </Container>
        </Col>
        <Col sm={4}>
          <Container className="custom-container">
            <img src={image8} alt="Destination 8" />
            <p>Destination 8</p>
          </Container>
        </Col>
        <Col sm={4}>
          <Container className="custom-container">
            <img src={image9} alt="Destination 9" />
            <p>Destination 9</p>
          </Container>
        </Col>
      </Row>
      <style>
        {`
        .custom-container {
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #ff4f00;
        }
        
        .custom-container img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      `}
      </style>
    </Container>
  );
}

export default Destination;
