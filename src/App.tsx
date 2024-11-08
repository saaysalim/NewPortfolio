import 'bootstrap/dist/css/bootstrap.css'; // Importing Bootstrap CSS for responsive layout and predefined styles
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JavaScript bundle (including Popper)
import {Link} from'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Logo from './assets/logo.png';
import SalimSaay from'./assets/SalimSaay.jpg';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import About from './Pages/About';
import './App.css'
import './NavBar';
import './NavBar.css';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import VideoGallery from './Pages/VideoGallery';
import Education from './Pages/Education';
function App(){
  return (
    <div>
      <nav>
        <ul className="navbar">
          <div className='navbar-logo'>
            <div className='logo-container'>
              <img src={Logo} alt="Logo" />
              <img src={SalimSaay} alt='Logo'/>
            </div>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Project">Project</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="VideoGallery">VideoGallery</Link></li>
            <li><Link to="Education">Education</Link></li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/About"element={<About/>} />
        <Route path="/Project"element={<Project/>} />
        <Route path="/Contact"element={<Contact/>} />
        <Route path="/Gallery"element={<Gallery/>}/>
        <Route path="/Blog"element={<Blog/>}/>
        <Route path="/VideoGallery"element={<VideoGallery/>}/>
        <Route path="/Education"element={<Education/>}/>
      </Routes>
      <footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Salim Saay. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer>
    </div>
  );
}
export default App
