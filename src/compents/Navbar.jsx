import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Adjust the path if needed

function Navbar() {
  return (
    <>
      {/* Pre-Header */}
      <div className="pre-header" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-9">
              <div className="left-info">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i>+000 1234 5678
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope"></i>infocompany@email.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker"></i>St. London 54th Bull
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* Logo */}
                <Link to="/" className="logo">
                  <img src={logo} alt="Logo" style={{ maxWidth: "112px" }} />
                </Link>

                {/* Navigation Menu */}
                <ul className="nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/faq">FAQs</Link></li>
                  <li><Link to="/AboutUs">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>

                {/* Menu Trigger */}
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;