import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/mystyle.css';
import Navbar from './assets/Components/Navbar';
import Home from './assets/Pages/Home';
import Shop from './assets/Pages/Shop';
import Men from './assets/Pages/Men';
import Contact from './assets/Pages/Contact';
import About from './assets/Pages/About';
import Faq from './assets/Pages/Faq';
import Blog from './assets/Pages/Blog';

import LoginRegister from './assets/Pages/LoginRegister';
import TopBar from './assets/Components/Topbar';
import Women from './assets/Pages/Women';
import Kid from './assets/Pages/Kid';


function App() {
  return (
    <Router>
      <TopBar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/men" element={<Men/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/women" element={<Women/>}/>
        <Route path="/kid" element={<Kid/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog/>} />
        
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
