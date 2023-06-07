import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";

function Destination() {
  return (
    <Container>
      <h1>Destinations</h1>
      <Row className='my-4'>
        <Col xs={12} md={6} lg={4}>
          <Container className="custom-container mb-4">
            <img className="shadow mb-2" src={image4} alt="Destination 4" />
            <p className="p-2">
              Cruise Life sail anywhere in the world it is recommended if you
              want to get more for your money. Many cruises provide packages for
              you to choose from. Including drink packages, food packages, and
              exploration packages for the countries visited.
            </p>
          </Container>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Container className="custom-container mb-4">
            <img className="shadow mb-2" src={image5} alt="Destination 5" />
            <p className="p-2">
              Guatemala is currently a hot destination. There are lots of things
              to do in Guatemala such as hiking, going to the beach, going to
              the mountains. The country is located in Central America and is
              rich in Garifuna and Myan culture.
            </p>
          </Container>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Container className="custom-container mb-4">
            <img className="shadow mb-2" src={image6} alt="Destination 6" />
            <p className="p-2">
              Jamaica is one of the most popular destinations this time of year.
              The food is delicious and the views are amazing. So many resorts
              in Jamaica offer all inclusive packages. Jamaica is located in the
              Caribbean and should be on the list of destinations.
            </p>
          </Container>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Container className="custom-container mb-4">
            <img className="shadow mb-2" src={image7} alt="Destination 7" />
            <p className="p-2">
              Santorini,Greece should be on everyone's bucket list. The country
              is breathe takingly beautiful. Santorini overlooks the sea with
              views of neighboring islands. Santorini was a country made for
              memories.
            </p>
          </Container>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Container className="custom-container mb-4">
            <img className="shadow mb-2" src={image8} alt="Destination 8" />
            <p className="p-2">
              Aruba is a beloved travel location to many. Aruba is known as "one
              happy island" for good reason. Aruba has variety of things to do.
              Its recommended to visit the Flamingo beach on the happy island.
            </p>
          </Container>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Container className="custom-container mb-4">
            <img className="shadow mb-2" src={image9} alt="Destination 9" />
            <p className="p-2">
              St. Maarten is similar to Aruba as they are both a part of the
              Kingdom of the Netherlands. This country does provide its own
              unique flare with features such a span lagoons, beaches and salt
              pans. The country provides a very relaxing vibe.{" "}
            </p>
          </Container>
        </Col>
      </Row>
      <style>
        {`
        .custom-container {
          height: 450px;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
          
        }
        
        .custom-container img {
          max-height: 250px;
          object-fit: cover;
        }
      `}
      </style>
    </Container>
  );
}

export default Destination;
