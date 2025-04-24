import React from "react";
import { Link } from "react-router-dom";

// Image imports
import logo from "../assets/images/logo.png";
import aboutImg from "../assets/images/about-us-image.jpg";
import videoThumb from "../assets/images/video-thumb.jpg";
import happyClient from "../assets/images/happyclient-01.jpg";

function Home() {
  return (
    <>
      {/* Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img src={logo} alt="Logo" style={{ maxWidth: "112px" }} />
                </Link>
                <ul className="nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/faq">FAQs</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
                <a className="menu-trigger"><span>Menu</span></a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Page Heading */}
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>Discover More <em>About Us</em></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore.</p>
                <div className="main-button"><a href="#">Discover More</a></div>
                <span>or</span>
                <div className="second-button"><a href="#">Check our FAQs</a></div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <img src={aboutImg} alt="About Us" style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Video Info Section */}
      <div className="video-info section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-thumb">
                <img src={videoThumb} alt="Video Thumbnail" style={{ width: "100%", height: "auto" }} />
                <a href="http://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-play"></i></a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>Detailed Information On What We Do &amp; Who We Are</h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor.</p>
              </div>
              <div className="skills">
                <div className="skill-slide marketing">
                  <div className="fill"></div>
                  <h6>SEO Marketing</h6><span>90%</span>
                </div>
                <div className="skill-slide digital">
                  <div className="fill"></div>
                  <h6>Digital Marketing</h6><span>80%</span>
                </div>
                <div className="skill-slide media">
                  <div className="fill"></div>
                  <h6>Social Media Management</h6><span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className="happy-clients section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our 4 Steps <em>To Success</em> &amp; <span>Happy Clients</span></h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="active"><span>Project Introduction</span></div>
                        <div><span>Work Development</span></div>
                        <div><span>Data Analysis</span></div>
                        <div className="last-item"><span>Project Finishing</span></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        {[...Array(4)].map((_, idx) => (
                          <li className={idx === 0 ? "active" : ""} key={idx}>
                            <div>
                              <div className="row">
                                <div className="col-lg-7">
                                  <h4>Title Goes Here</h4>
                                  <div className="line-dec"></div>
                                  <p>Lorem ipsum dolor sit amet... <Link to="/">Home</Link>, <Link to="/about">About</Link>, <Link to="/faq">FAQ</Link></p>
                                  <div className="info">
                                    <span>Tag 1</span>
                                    <span>Tag 2</span>
                                    <span>Tag 3</span>
                                    <span className="last-span">Tag 4</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <div className="col-lg-5 align-self-center">
                                  <img src={happyClient} alt="Happy Client" style={{ width: "100%", height: "auto" }} />
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>Are You Ready To Work &amp; Develop With Us ?<br />Don't Hesitate &amp; Contact Us !</h4>
            </div>
            <div className="col-lg-4">
              <div className="main-button">
                <a href="#">Contact Us Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2036 <a href="#">Tale SEO Agency</a>. All rights reserved.
              <br />
              Design: <a href="https://templatemo.com" target="_blank" rel="noopener noreferrer">TemplateMo</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;