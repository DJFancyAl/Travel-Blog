import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../style/style.css';

function Home() {
  return (
    <Container>
        <header style={{ paddingLeft: 0 }}>
          <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 500, marginBottom: 20 }}>
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 400 }}>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                  <h1 className='mb-3'>This is Open Mate-r</h1>
                  <h4 className='mb-3'>You can post Travel Blogs</h4>
                  <Link className='btn btn-outline-light btn-lg' to={`/blogs`} role='button'> Open Mate-r</Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        <CardGroup>
        <Card style={{margin: 10, border: 0}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{margin: 10, border: 0}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{margin: 10, border: 0}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
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
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
    </Container>
  )
}

export default Home