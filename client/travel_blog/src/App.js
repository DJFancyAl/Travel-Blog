import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Blogs from "./Components/Pages/Blogs";
import NewBlog from "./Components/Pages/NewBlog";
import ShowBlog from "./Components/Pages/ShowBlog";
import EditBlog from "./Components/Pages/EditBlog";
import Authors from "./Components/Pages/Authors";
import ShowAuthor from "./Components/Pages/ShowAuthor";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Profile from "./Components/Pages/Profile";
import Destination from "./Components/Pages/Destination";
import ResponsiveAppBar from "./Components/NavBar";
import { AuthorContext } from "./Context/AuthorContext"

function App() {
  // States
  const [author, setAuthor] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [authors, setAuthors] = useState([]);

  // Get Author
  useEffect(() => {
    const storedAuthor = JSON.parse(localStorage.getItem('author'))
    if(storedAuthor !== null) setAuthor(storedAuthor)
  },[])
  
  // Fetches all blogs
  useEffect(() => {
    async function getBlogs() {
      const response = await fetch("https://travel-blog-api.onrender.com/blogs");
      const data = await response.json();
      setBlogs(data.blogs);
      setAuthors(data.authors);
    }

    getBlogs()
  }, [])

  // Add Blog
  const addBlog = async (newBlog) => {
    const response = await fetch('https://travel-blog-api.onrender.com/blogs', {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": localStorage.getItem('token')
      },
      body: JSON.stringify(newBlog)
    })
    const data = await response.json()
    setBlogs([data, ...blogs])
    return data._id
  }

  // Delete Blog
  const deleteBlog = async (id) => {
    const response = await fetch(`https://travel-blog-api.onrender.com/blogs/${id}`, {
        method: "delete",
        headers: {
            'Content-Type': 'application/json',
            "x-access-token": localStorage.getItem('token')
        }})
    const data = await response.json()
    if(data.message) {
      setBlogs(
        blogs.filter(blog => blog._id !== id)
      )
    }
  }

  return (
    <div className="bg-secondary-emphasis">
      <Router>
        <AuthorContext.Provider value={{author, setAuthor}}>
          <ResponsiveAppBar />
          <div className="mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs blogs={blogs} />} />
              <Route path="/blog/new" element={<NewBlog addBlog={addBlog} />} />
              <Route path="/blog/:id" element={<ShowBlog deleteBlog={deleteBlog} />} />
              <Route path="/blog/edit/:id" element={<EditBlog />} />
              <Route path="/authors" element={<Authors authors={authors} />} />
              <Route path="/author/:id" element={<ShowAuthor />} />
              <Route path="/authors/register" element={<Register />} />
              <Route path="/authors/login" element={<Login />} />
              <Route path="/authors/profile" element={<Profile />} />
              <Route path="/destination" element={<Destination />} />
            </Routes>
          </div>
        </AuthorContext.Provider>
      </Router>
    </div>
  );
}

export default App;
