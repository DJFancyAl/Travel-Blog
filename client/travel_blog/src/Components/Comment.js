import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Comment( { comment } ) {
    const {title, body, date, author} = comment
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    
    return (
        <div>
            <Row className='bg-primary text-white m-0 p-3'>
                <Col onClick={() => console.log(author.name)}>
                    {author.name} - {formattedDate}
                </Col>
            </Row>
            <Row className='bg-secondary text-white m-0 p-3'>
                <Col className='text-center p-3'>
                    <h5>{title}</h5>
                    <p>{body}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Comment