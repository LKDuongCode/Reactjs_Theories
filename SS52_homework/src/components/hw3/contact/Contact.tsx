import React from "react";

export default function Contact() {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <a href="index.html" className="logo m-0">
              Tour <span className="text-primary">.</span>
            </a>
            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li className="has-children">
                <a href="#">Dropdown</a>
                <ul className="dropdown">
                  <li>
                    <a href="elements.html">Elements</a>
                  </li>
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Menu Two</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Sub Menu One</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li className="active">
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span />
            </a>
          </div>
        </div>
      </nav>
      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">Contact Us</h1>
                <p className="text-white">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <form
                className="contact-form"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="fname">
                        First name
                      </label>
                      <input type="text" className="form-control" id="fname" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="lname">
                        Last name
                      </label>
                      <input type="text" className="form-control" id="lname" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black" htmlFor="email">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label className="text-black" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name=""
                    className="form-control"
                    id="message"
                    cols={30}
                    rows={5}
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-lg-5 ml-auto">
              <div className="quick-contact-item d-flex align-items-center mb-4">
                <span className="flaticon-house" />
                <address className="text">
                  155 Market St #101, Paterson, NJ 07505, United States
                </address>
              </div>
              <div className="quick-contact-item d-flex align-items-center mb-4">
                <span className="flaticon-phone-call" />
                <address className="text">+1 202 2020 200</address>
              </div>
              <div className="quick-contact-item d-flex align-items-center mb-4">
                <span className="flaticon-mail" />
                <address className="text">@info@mydomain.com</address>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section testimonial-section mt-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <h2 className="section-title text-center mb-5">Testimonials</h2>
              <div className="owl-single owl-carousel no-nav">
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img
                      src="images/person_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <h3 className="name">Adam Aderson</h3>
                  <blockquote>
                    <p>
                      “There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.”
                    </p>
                  </blockquote>
                </div>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img
                      src="images/person_3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <h3 className="name">Lukas Devlin</h3>
                  <blockquote>
                    <p>
                      “There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.”
                    </p>
                  </blockquote>
                </div>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <h3 className="name">Kayla Bryant</h3>
                  <blockquote>
                    <p>
                      “There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer">
        <div className="inner first">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">About Tour</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="widget">
                  <ul className="list-unstyled social">
                    <li>
                      <a href="#">
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-apple" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 pl-lg-5">
                <div className="widget">
                  <h3 className="heading">Pages</h3>
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="widget">
                  <h3 className="heading">Resources</h3>
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">Contact</h3>
                  <ul className="list-unstyled quick-info links">
                    <li className="email">
                      <a href="#">mail@example.com</a>
                    </li>
                    <li className="phone">
                      <a href="#">+1 222 212 3819</a>
                    </li>
                    <li className="address">
                      <a href="#">43 Raymouth Rd. Baltemoer, London 3910</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner dark">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-8 mb-3 mb-md-0 mx-auto">
                <p>
                  Copyright ©. All Rights Reserved. — Designed with love by{" "}
                  <a href="https://untree.co" className="link-highlight">
                    Untree.co
                  </a>{" "}
                  {/* License information: https://untree.co/license/ */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="overlayer" />
      <div className="loader">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}
