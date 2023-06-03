import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdPerson } from "react-icons/md";

function Authors( { authors }) {

    // Create the Author List
    const authorList = authors.map(author => {
        return (
            <Col key={author._id} xs={12} lg={4}>
                <Card>
                    {author.pic && <Card.Img variant="top" src={author.pic} />}
                    <Card.Body>
                    <Card.Title>{author.name}</Card.Title>
                    <Card.Text>{author.bio}</Card.Text>
                    <Link to={`/author/${author._id}`}><Button>View Author <MdPerson className='mb-1' size={20} /></Button></Link>
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