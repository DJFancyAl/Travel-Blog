import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../../css/style.css";

import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  let imgs = [
    "https://wallpapercrafter.com/th800/33038-Italy-coast-4K-4k-wallpaper-4K-Tyrrhenian-Sea-houses-sky-clouds-booking-rest-travel.jpg",
    "https://memes.co.in/wallpapers/uploads/1625904083.jpg",
    "https://c0.wallpaperflare.com/preview/453/499/723/men-nature-and-landscapes-travel-adventure.jpg",
  ];

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ height: 500, marginBottom: 20 }}>
          <img className="d-block w-100" src={imgs[0]} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500, marginBottom: 20 }}>
          <img className="d-block w-100" src={imgs[1]} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500, marginBottom: 10 }}>
          <img className="d-block w-100" src={imgs[2]} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CardGroup>
        <Card style={{ margin: 10, border: 0 }}>
          <div style={{ height: 200 }}>
            <Card.Img
              variant="top"
              src={image1}
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
          <Card.Body>
            <Card.Text>
              <Link to="/blogs">TRAVEL BLOG</Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ margin: 10, border: 0 }}>
          <div style={{ height: 200 }}>
            <Card.Img
              variant="top"
              src={image2}
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
          <Card.Body>
            <Card.Text>TRAVEL TIPS</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ margin: 10, border: 0 }}>
          <div style={{ height: 200 }}>
            <Card.Img
              variant="top"
              src={image3}
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
          <Card.Body>
            <Link to="/Destination">DESIRED DESTINATION</Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Card>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{" "}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
