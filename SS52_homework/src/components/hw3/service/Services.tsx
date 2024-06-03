import React from "react";

export default function Services() {
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
              <li>
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
              <li className="active">
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
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
                <h1 className="mb-0">Our Services</h1>
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
            <div className="col-6 col-md-6 col-lg-3">
              <div className="media-1">
                <a href="#" className="d-block mb-3">
                  <img
                    src="images/hero-slider-1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="d-flex">
                  <div>
                    <h3>
                      <a href="#">Excellence in Travel</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="media-1">
                <a href="#" className="d-block mb-3">
                  <img
                    src="images/hero-slider-2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="d-flex">
                  <div>
                    <h3>
                      <a href="#">Discovering Best</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="media-1">
                <a href="#" className="d-block mb-3">
                  <img
                    src="images/hero-slider-3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="d-flex">
                  <div>
                    <h3>
                      <a href="#">A New Moments of Life</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="media-1">
                <a href="#" className="d-block mb-3">
                  <img
                    src="images/hero-slider-4.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="d-flex">
                  <div>
                    <h3>
                      <a href="#">Joy To Your Journey</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="service text-center">
                <span className="icon-paper-plane" />
                <h3>Excellence in Travel</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="service text-center">
                <span className="icon-tag" />
                <h3>Discover Best</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="service text-center">
                <span className="icon-user" />
                <h3>A New Moments of Life</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="service text-center">
                <span className="icon-support" />
                <h3>Joy To Your Journey</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="section-title text-center mb-3">More Services</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="row align-items-stretch">
            <div className="col-lg-4 order-lg-1">
              <div className="h-100">
                <div className="frame h-100">
                  <div
                    className="feature-img-bg h-100"
                    style={{
                      backgroundImage: 'url("images/hero-slider-1.jpg")',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1">
              <div className="feature-1 d-md-flex">
                <div className="align-self-center">
                  <span className="flaticon-house display-4 text-primary" />
                  <h3>Beautiful Condo</h3>
                  <p className="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>
              <div className="feature-1 ">
                <div className="align-self-center">
                  <span className="flaticon-restaurant display-4 text-primary" />
                  <h3>Restaurants &amp; Cafe</h3>
                  <p className="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3">
              <div className="feature-1 d-md-flex">
                <div className="align-self-center">
                  <span className="flaticon-mail display-4 text-primary" />
                  <h3>Easy to Connect</h3>
                  <p className="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>
              <div className="feature-1 d-md-flex">
                <div className="align-self-center">
                  <span className="flaticon-phone-call display-4 text-primary" />
                  <h3>24/7 Support</h3>
                  <p className="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 cta-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="mb-2 text-white">
                Lets you Explore the Best. Contact Us Now
              </h2>
              <p className="mb-4 lead text-white text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, fugit?
              </p>
              <p className="mb-0">
                <a
                  href="booking.html"
                  className="btn btn-outline-white text-white btn-md font-weight-bold"
                >
                  Get in touch
                </a>
              </p>
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
