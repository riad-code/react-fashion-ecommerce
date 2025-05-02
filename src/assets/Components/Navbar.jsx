import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Components/logo/969e14aeff18bec86b6422afde7a0174.jpg';



const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
     
      {showSearch && (
        <div className="search-overlay position-fixed top-0 start-0 w-100 h-100 bg-white d-flex align-items-center justify-content-center z-3 ">
          <div className="container px-4 position-relative">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for products..."
              autoFocus
            />
            <button
              className="btn btn-link position-absolute top-0 end-0 mt-3 me-4 text-dark"
              onClick={toggleSearch}
            >
              <i className="bi bi-x-lg fs-3"></i>
            </button>
          </div>
        </div>
      )}

    
      <nav className="navbar navbar-expand navbar-dark bg-dark py-1 shadow-sm  ">
        <div className="container">
          <Link className="navbar-brand text-info fw-bold  fst-italic fs-3" to="/">
            <img src={logo} alt="Shopwise" height="30" className="me-2 " />
            Fashionista
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="mainNavbar">
            <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
             
              <li className="nav-item dropdown">
                <Link className="nav-link text-info  " to="/" role="button">
                  HOME
                </Link>
                
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-info " to="/" role="button" data-bs-toggle="dropdown">
                  PRODUCTS
                </Link>
                <ul className="dropdown-menu text-info">
               

                  <li><Link className="dropdown-item text-info" to="/men">Men</Link></li>
                  <li><Link className="dropdown-item text-info" to="/women">Women</Link></li>
                  <li><Link className="dropdown-item text-info" to="/kid">Kid</Link></li>
                </ul>
              </li>

              <li className="nav-item ">
                <Link className="nav-link text-info" to="/shop" role="button" >
                  SHOP
                </Link>
              
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link  text-info" to="/blog" role="button" >
                  BLOG
                </Link>
               
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-info" to="/pages" role="button" data-bs-toggle="dropdown">
                  PAGES
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-info" to="/about">About Us</Link></li>
                  <li><Link className="dropdown-item text-info" to="/faq">FAQ</Link></li>
                </ul>
              </li>

              <li className="nav-item"><Link className="nav-link text-info" to="/contact">CONTACT US</Link></li>
            </ul>

            <div className="d-flex align-items-center">
              <button className="btn btn-link text-light me-3" onClick={toggleSearch}>
                <i className="bi bi-search fs-5"></i>
              </button>
              
              <Link to="/cart" className="position-relative text-light">
                <i className="bi bi-cart" style={{ fontSize: '1.5rem' }}></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
