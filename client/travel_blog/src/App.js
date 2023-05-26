import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import NewBlog from './Components/NewBlog'
import ShowBlog from './Components/ShowBlog'
import ResponsiveAppBar from './Components/NavBar'

function App() {
  // States
  const [blogs, setBlogs] = useState([])

  // Fetches all blogs
  useEffect(() => {
    async function getBlogs() {
      const response = await fetch('http://localhost:3001/blogs')
      const data = await response.json();
      setBlogs(data)
    }

    getBlogs()
  }, [])


  return (
      <div>
        <Router>
          <ResponsiveAppBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/blogs' element={<Blogs blogs={blogs} />} />
              <Route path='/blogs/new' element={<NewBlog />} />
              <Route path='/blogs/:id' element={<ShowBlog />} />
              <Route path='/blogs/edit/:id' element={<ShowBlog />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
