import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../../css_old/style.css";

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

  // Link Style
  const linkStyle = {
    textDecoration: 'none',
    color: '#2b5f57'
  }

  return (
    <Container>
      <Carousel className="shadow" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ height: 500, marginBottom: 20 }}>
          <img className="d-block w-100" src={imgs[0]} alt="First slide" />
          <Carousel.Caption>
            <h3>Keep calm and travel on.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500, marginBottom: 20 }}>
          <img className="d-block w-100" src={imgs[1]} alt="Second slide" />
          <Carousel.Caption>
            <h3>Always say yes to new adventures.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500, marginBottom: 20 }}>
          <img className="d-block w-100" src={imgs[2]} alt="Third slide" />
          <Carousel.Caption>
            <h3>What's on my bucket list? Everywhere...</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CardGroup className="text-center">
        <Card className="shadow" style={{ margin: 10, border: 0 }}>
          <div style={{ height: 200 }}>
            <Card.Img
              variant="top"
              src={image1}
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
          <Card.Body>
            <Card.Text>
              <Link style={linkStyle} to="/blogs"><h6 className="lead fw-bold">Travel Blog</h6></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Read what travelers are saying...</small>
          </Card.Footer>
        </Card>
        <Card className="shadow" style={{ margin: 10, border: 0 }}>
          <div style={{ height: 200 }}>
            <Card.Img
              variant="top"
              src={image2}
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
          <Card.Body>
            <Link style={linkStyle} to="/Travel"><h6 className="lead fw-bold">Travel Tips</h6></Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Learn the best way to travel!</small>
          </Card.Footer>
        </Card>
        <Card className="shadow" style={{ margin: 10, border: 0 }}>
          <div style={{ height: 200 }}>
            <Card.Img
              variant="top"
              src={image3}
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
          <Card.Body>
            <Link style={linkStyle} to="/destinations"><h6 className="lead fw-bold">Desired Destinations</h6></Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Figure out where to go...</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Card className="mb-5 text-center shadow">
        <Card.Header>Let's get the adventure started!</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>A journey of a thousand miles begins with a single step. – Lao Tzu.</p>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
