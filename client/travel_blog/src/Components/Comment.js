import Accordion from 'react-bootstrap/Accordion';

function Comment( { comment } ) {
  return (
    <Accordion.Item eventKey={comment._id}>
        <Accordion.Header>{comment.title}</Accordion.Header>
        <Accordion.Body>{comment.body}</Accordion.Body>
      </Accordion.Item>
  )
}

export default Comment