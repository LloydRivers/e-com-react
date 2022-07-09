import React from "react";

const ContactPage = () => {
  return (
    <>
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 text-center text-lg-left">
                <a href="./index.html" className="site-logo">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <div className="col-xl-6 col-lg-5">
                <form className="header-search-form">
                  <input type="text" placeholder="Search on divisima ...." />
                  <button>
                    <i className="flaticon-search"></i>
                  </button>
                </form>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="user-panel">
                  <div className="up-item">
                    <i className="flaticon-profile"></i>
                    <a href="#">Sign</a> In or <a href="#">Create Account</a>
                  </div>
                  <div className="up-item">
                    <div className="shopping-card">
                      <i className="flaticon-bag"></i>
                      <span>0</span>
                    </div>
                    <a href="#">Shopping Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-navbar">
          <div className="container">
            <ul className="main-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">
                  Jewelry
                  <span className="new">New</span>
                </a>
              </li>
              <li>
                <a href="#">Shoes</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Sneakers</a>
                  </li>
                  <li>
                    <a href="#">Sandals</a>
                  </li>
                  <li>
                    <a href="#">Formal Shoes</a>
                  </li>
                  <li>
                    <a href="#">Boots</a>
                  </li>
                  <li>
                    <a href="#">Flip Flops</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="./product.html">Product Page</a>
                  </li>
                  <li>
                    <a href="./category.html">Category Page</a>
                  </li>
                  <li>
                    <a href="./cart.html">Cart Page</a>
                  </li>
                  <li>
                    <a href="./checkout.html">Checkout Page</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="page-top-info">
        <div className="container">
          <h4>Contact</h4>
          <div className="site-pagination">
            <a href="">Home</a> /<a href="">Contact</a>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 contact-info">
              <h3>Get in touch</h3>
              <p>Main Str, no 23, New York</p>
              <p>+546 990221 123</p>
              <p>hosting@contact.com</p>
              <div className="contact-social">
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
              <form className="contact-form">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your e-mail" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button className="site-btn">SEND NOW</button>
              </form>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1139.782737299922!2d-0.11634005268876724!3d51.46028085135688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604684401e0ef%3A0x671b4ae83543b8de!2sBlack%20Cultural%20Archives!5e0!3m2!1sen!2suk!4v1657363768407!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="related-product-section spad">
        <div className="container">
          <div className="section-title">
            <h2>Your Favorites</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <div className="tag-new">New</div>
                  <img src="./img/product/2.jpg" alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="flaticon-bag"></i>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Black and White Stripes Dress</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src="./img/product/5.jpg" alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="flaticon-bag"></i>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src="./img/product/9.jpg" alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="flaticon-bag"></i>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src="./img/product/1.jpg" alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="flaticon-bag"></i>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <div className="container">
          <div className="footer-logo text-center">
            <a href="index.html">
              <img src="./img/logo-light.png" alt="" />
            </a>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>About</h2>
                <p>
                  Donec vitae purus nunc. Morbi faucibus erat sit amet congue
                  mattis. Nullam frin-gilla faucibus urna, id dapibus erat
                  iaculis ut. Integer ac sem.
                </p>
                <img src="img/cards.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>Questions</h2>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Track Orders</a>
                  </li>
                  <li>
                    <a href="">Returns</a>
                  </li>
                  <li>
                    <a href="">Jobs</a>
                  </li>
                  <li>
                    <a href="">Shipping</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Partners</a>
                  </li>
                  <li>
                    <a href="">Bloggers</a>
                  </li>
                  <li>
                    <a href="">Support</a>
                  </li>
                  <li>
                    <a href="">Terms of Use</a>
                  </li>
                  <li>
                    <a href="">Press</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>Questions</h2>
                <div className="fw-latest-post-widget">
                  <div className="lp-item">
                    <div
                      className="lp-thumb set-bg"
                      data-setbg="img/blog-thumbs/1.jpg"
                    ></div>
                    <div className="lp-content">
                      <h6>what shoes to wear</h6>
                      <span>Oct 21, 2018</span>
                      <a href="#" className="readmore">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="lp-item">
                    <div
                      className="lp-thumb set-bg"
                      data-setbg="img/blog-thumbs/2.jpg"
                    ></div>
                    <div className="lp-content">
                      <h6>trends this year</h6>
                      <span>Oct 21, 2018</span>
                      <a href="#" className="readmore">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget contact-widget">
                <h2>Questions</h2>
                <div className="con-info">
                  <span>C.</span>
                  <p>Your Company Ltd </p>
                </div>
                <div className="con-info">
                  <span>B.</span>
                  <p>1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68 </p>
                </div>
                <div className="con-info">
                  <span>T.</span>
                  <p>+53 345 7953 32453</p>
                </div>
                <div className="con-info">
                  <span>E.</span>
                  <p>office@youremail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-links-warp">
          <div className="container">
            <div className="social-links">
              <a href="" className="instagram">
                <i className="fa fa-instagram"></i>
                <span>instagram</span>
              </a>
              <a href="" className="google-plus">
                <i className="fa fa-google-plus"></i>
                <span>g+plus</span>
              </a>
              <a href="" className="pinterest">
                <i className="fa fa-pinterest"></i>
                <span>pinterest</span>
              </a>
              <a href="" className="facebook">
                <i className="fa fa-facebook"></i>
                <span>facebook</span>
              </a>
              <a href="" className="twitter">
                <i className="fa fa-twitter"></i>
                <span>twitter</span>
              </a>
              <a href="" className="youtube">
                <i className="fa fa-youtube"></i>
                <span>youtube</span>
              </a>
              <a href="" className="tumblr">
                <i className="fa fa-tumblr-square"></i>
                <span>tumblr</span>
              </a>
            </div>

            <p className="text-white text-center mt-5">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
