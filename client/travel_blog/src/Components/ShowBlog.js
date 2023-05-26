import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function ShowBlog() {
  // States
  const {id} = useParams()
  const [blog, setBlog] = useState({})

  useEffect(() => {
    async function getBlog() {
      const response = await fetch(`http://localhost:3001/blogs/${id}`)
      const data = await response.json();
      setBlog(data)
    }

    getBlog()
  }, [id])

  return (
    <div>
        <h1>{blog.title}</h1>
        <h4>Written By: {blog.author}</h4>
        {blog.pic && <img src={blog.pic} alt={blog.title} />}
        <p>{blog.body}</p>
    </div>
  )
}

export default ShowBlog