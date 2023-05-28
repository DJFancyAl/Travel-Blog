import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Authors( { authors }) {

    // Create the Author List
    const authorList = authors.map(author => {
        return (
            <Col key={author._id} xs={12} lg={4}>
                <Card>
                    <Card.Img variant="top" src={author.pic} />
                    <Card.Body>
                    <Card.Title>{author.name}</Card.Title>
                    <Card.Text>{author.bio}</Card.Text>
                    <Link to={`/blogs/${author._id}`}><Button>View Blogs</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        )
    }) 

    return (
        <Container>
            <h1>View All Authors</h1>
            <Row>{authorList}</Row>
        </Container>
    )
}

export default Authors