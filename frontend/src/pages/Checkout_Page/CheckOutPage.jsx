import React from "react";

const CheckOutPage = () => {
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
          <h4>Your cart</h4>
          <div className="site-pagination">
            <a href="">Home</a> /<a href="">Your cart</a>
          </div>
        </div>
      </div>

      <section className="checkout-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-2 order-lg-1">
              <form className="checkout-form">
                <div className="cf-title">Billing Address</div>
                <div className="row">
                  <div className="col-md-7">
                    <p>*Billing Information</p>
                  </div>
                  <div className="col-md-5">
                    <div className="cf-radio-btns address-rb">
                      <div className="cfr-item">
                        <input type="radio" name="pm" id="one" />
                        <label htmlFor="one">Use my regular address</label>
                      </div>
                      <div className="cfr-item">
                        <input type="radio" name="pm" id="two" />
                        <label htmlFor="two">Use a different address</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row address-inputs">
                  <div className="col-md-12">
                    <input type="text" placeholder="Address" />
                    <input type="text" placeholder="Address line 2" />
                    <input type="text" placeholder="Country" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Zip code" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Phone no." />
                  </div>
                </div>
                <div className="cf-title">Delievery Info</div>
                <div className="row shipping-btns">
                  <div className="col-6">
                    <h4>Standard</h4>
                  </div>
                  <div className="col-6">
                    <div className="cf-radio-btns">
                      <div className="cfr-item">
                        <input type="radio" name="shipping" id="ship-1" />
                        <label htmlFor="ship-1">Free</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <h4>Next day delievery </h4>
                  </div>
                  <div className="col-6">
                    <div className="cf-radio-btns">
                      <div className="cfr-item">
                        <input type="radio" name="shipping" id="ship-2" />
                        <label htmlFor="ship-2">$3.45</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cf-title">Payment</div>
                <ul className="payment-list">
                  <li>
                    Paypal
                    <a href="#">
                      <img src="img/paypal.png" alt="" />
                    </a>
                  </li>
                  <li>
                    Credit / Debit card
                    <a href="#">
                      <img src="img/mastercart.png" alt="" />
                    </a>
                  </li>
                  <li>Pay when you get the package</li>
                </ul>
                <button className="site-btn submit-order-btn">
                  Place Order
                </button>
              </form>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="checkout-cart">
                <h3>Your Cart</h3>
                <ul className="product-list">
                  <li>
                    <div className="pl-thumb">
                      <img src="img/cart/1.jpg" alt="" />
                    </div>
                    <h6>Animal Print Dress</h6>
                    <p>$45.90</p>
                  </li>
                  <li>
                    <div className="pl-thumb">
                      <img src="img/cart/2.jpg" alt="" />
                    </div>
                    <h6>Animal Print Dress</h6>
                    <p>$45.90</p>
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    Total<span>$99.90</span>
                  </li>
                  <li>
                    Shipping<span>free</span>
                  </li>
                  <li className="total">
                    Total<span>$99.90</span>
                  </li>
                </ul>
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

export default CheckOutPage;
