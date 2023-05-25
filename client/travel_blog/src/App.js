import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import NewBlog from './Components/NewBlog'
import ShowBlog from './Components/ShowBlog'
import ResponsiveAppBar from './Components/NavBar'

function App() {
  return (
      <div>
        <Router>
          <ResponsiveAppBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/new' element={<NewBlog />} />
              <Route path='/blog/:id' element={<ShowBlog />} />
              <Route path='/edit/:id' element={<ShowBlog />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
