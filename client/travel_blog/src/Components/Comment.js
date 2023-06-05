import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";

function Comment( { comment, deleteComment, currentAuthor } ) {
    // State
    const {title, body, date, author} = comment
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    
    // Delete Comment
    const removeComment = async () => {
        const response = await fetch(`http://localhost:3001/comments/${comment._id}`, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token": localStorage.getItem('token')
            }})
        const data = await response.json()
        if(data.message) {
            deleteComment(comment._id)
        }
    }

    return (
        <>
            <Row className='bg-primary text-white m-0 p-3'>
                <Col className='d-flex flex-row align-items-center'>
                    {author.pic && <Image src={author.pic} roundedCircle height='40' />}
                    <div className='mx-3'>{author.name} - {formattedDate}</div>
                    {currentAuthor === author._id && <Button className='ms-auto'><MdDelete size={30} onClick={removeComment} /></Button>}
                </Col>
            </Row>
            <Row className='bg-light m-0 p-3'>
                <Col className='text-center p-3'>
                    <h5>{title}</h5>
                    <p>{body}</p>
                </Col>
            </Row>
        </>
    )
}

export default Comment