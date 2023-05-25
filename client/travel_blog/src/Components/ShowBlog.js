import React from 'react'
import { useParams } from 'react-router-dom';

function ShowBlog() {
  const {id} = useParams()

  return (
    <div>
        <h1>Show One Blog with ID: {id}</h1>
    </div>
  )
}

export default ShowBlog