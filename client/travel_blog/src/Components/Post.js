import React from "react";
import { Link } from 'react-router-dom'

export default function Post( { blog }) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        // <div className="post">
        //   <div className="image">
        //     <Link to={blog._id}>
        //       <img src={blog.pic}alt=""/>
        //     </Link>
        //   </div>
        //   <div className="texts">
        //     <Link to={blog._id}>
        //     <h2>{blog.title}</h2>
        //     </Link>
        //     <p className="info">
        //       <a className="author">{blog.author}</a>
        //       <p>Current date is {date}</p>
        //     </p>
        //     <p className="summary">{blog.body.slice(0, 200)}</p>
        //   </div>
        // </div>
        // <div>Hello Yash</div>
        <div className="container">

            <div className="card">

                <div className="card-image">

                    <img src={blog.pic} alt=""></img>

                </div>

                <div className="card-context">Content of the post</div>

                <div className="info">

                    <Link className="author">Author</Link>
                    <p>{date}</p>
                    
                </div>

            </div>
        </div>
      );
}

