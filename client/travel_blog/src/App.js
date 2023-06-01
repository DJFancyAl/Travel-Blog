import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Blogs from "./Components/Pages/Blogs";
import NewBlog from "./Components/Pages/NewBlog";
import ShowBlog from "./Components/Pages/ShowBlog";
import EditBlog from "./Components/Pages/EditBlog";
import Authors from "./Components/Pages/Authors";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Profile from "./Components/Pages/Profile";
import Destination from "./Components/Pages/Destination";
import ResponsiveAppBar from "./Components/NavBar";

function App() {
  // States
  const [author, setAuthor] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [authors, setAuthors] = useState([]);

  // Update author in localstorage
  useEffect(() => {
    const storedAuthor = localStorage.getItem("author");
    console.log(storedAuthor);
  }, []);

  // Update author in localstorage
  useEffect(() => {
    localStorage.setItem("author", author);
  }, [author]);

  // Fetches all blogs
  useEffect(() => {
    async function getBlogs() {
      const response = await fetch("http://localhost:3001/blogs");
      const data = await response.json();
      setBlogs(data.blogs);
      setAuthors(data.authors);
    }

    getBlogs()
  }, [])


  return (
    <div>
      <Router>
        <ResponsiveAppBar author={author} setAuthor={setAuthor} />
        <div className="mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs blogs={blogs} />} />
            <Route path="/blog/new" element={<NewBlog authors={authors} />} />
            <Route path="/blog/:id" element={<ShowBlog />} />
            <Route path="/blog/edit/:id" element={<EditBlog />} />
            <Route path="/authors" element={<Authors authors={authors} />} />
            <Route
              path="/authors/register"
              element={<Register setAuthor={setAuthor} />}
            />
            <Route
              path="/authors/login"
              element={<Login setAuthor={setAuthor} />}
            />
            <Route
              path="/authors/profile"
              element={<Profile author={author} setAuthor={setAuthor} />}
            />
            <Route path="/destination" element={<Destination />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
