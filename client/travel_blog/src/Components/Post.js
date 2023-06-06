import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import GrowButton from './GrowButton'
import styles from '../CSS/Post.module.css'

function Post({ blog }) {
  // Styling
  const imageStyle = {
    maxWidth: '500px',
    maxHeight: '300px',
  }
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric' })


  return (
    <Row className={styles.post + ' shadow bg-light d-flex row my-5'}>
      <Col className='p-0 overflow-hidden d-flex justify-content-center' xs={12} md={3}>
        <Link to={`/blog/${blog._id}`}><Image className="p-0 object-fit-cover" src={blog.pic} alt={blog.title} style={imageStyle} /></Link>
      </Col>
      <Col className="p-0 d-flex flex-column flex-grow-1">
        <figure className="bg-primary text-light p-3 text-center m-0">
          <blockquote className="blockquote fs-3">
            <Link to={`/blog/${blog._id}`} className={styles.link}><p>{blog.title}</p></Link>
          </blockquote>
          <figcaption className="text-light blockquote-footer">
            <Link to={`/author/${blog.author._id}`} className={styles.link}>{blog.author.name}</Link> on <cite title="Source Title">{formattedDate}</cite>
          </figcaption>
        </figure>
        <div className="w-100 d-flex flex-grow-1 p-4 row align-items-center">
          <p className="m-0">{blog.body.substring(0, 400)}...</p>
          <div className="w-100 d-flex justify-content-end">
            <Link to={`/blog/${blog._id}`}><GrowButton variant='primary' start='150px' end='220px'>Read Blog</GrowButton></Link>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Post;
