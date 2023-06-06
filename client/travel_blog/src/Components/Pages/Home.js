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
            <h3></h3>
            <p>Keep calm and travel on.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500, marginBottom: 20 }}>
          <img className="d-block w-100" src={imgs[1]} alt="Second slide" />

          <Carousel.Caption>
            <h3></h3>
            <p>Always say yes to new adventures.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500, marginBottom: 10 }}>
          <img className="d-block w-100" src={imgs[2]} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p>What's on my bucket list? Everywhere.</p>
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
            <Link to="/Travel">TRAVEL TIPS</Link>
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
            <Link to="/Destination">DESIRED DESTINATIONS</Link>
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
              A journey of a thousand miles begins with a single step. – Lao
              Tzu.{" "}
            </p>
            <footer className="blockquote-footer"></footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
