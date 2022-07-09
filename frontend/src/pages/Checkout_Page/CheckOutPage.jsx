import React from "react";

const CheckOutPage = () => {
  return (
    <>
      <header class="header-section">
        <div class="header-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 text-center text-lg-left">
                <a href="./index.html" class="site-logo">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <div class="col-xl-6 col-lg-5">
                <form class="header-search-form">
                  <input type="text" placeholder="Search on divisima ...." />
                  <button>
                    <i class="flaticon-search"></i>
                  </button>
                </form>
              </div>
              <div class="col-xl-4 col-lg-5">
                <div class="user-panel">
                  <div class="up-item">
                    <i class="flaticon-profile"></i>
                    <a href="#">Sign</a> In or <a href="#">Create Account</a>
                  </div>
                  <div class="up-item">
                    <div class="shopping-card">
                      <i class="flaticon-bag"></i>
                      <span>0</span>
                    </div>
                    <a href="#">Shopping Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="main-navbar">
          <div class="container">
            <ul class="main-menu">
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
                  <span class="new">New</span>
                </a>
              </li>
              <li>
                <a href="#">Shoes</a>
                <ul class="sub-menu">
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
                <ul class="sub-menu">
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

      <div class="page-top-info">
        <div class="container">
          <h4>Your cart</h4>
          <div class="site-pagination">
            <a href="">Home</a> /<a href="">Your cart</a>
          </div>
        </div>
      </div>

      <section class="checkout-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 order-2 order-lg-1">
              <form class="checkout-form">
                <div class="cf-title">Billing Address</div>
                <div class="row">
                  <div class="col-md-7">
                    <p>*Billing Information</p>
                  </div>
                  <div class="col-md-5">
                    <div class="cf-radio-btns address-rb">
                      <div class="cfr-item">
                        <input type="radio" name="pm" id="one" />
                        <label for="one">Use my regular address</label>
                      </div>
                      <div class="cfr-item">
                        <input type="radio" name="pm" id="two" />
                        <label for="two">Use a different address</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row address-inputs">
                  <div class="col-md-12">
                    <input type="text" placeholder="Address" />
                    <input type="text" placeholder="Address line 2" />
                    <input type="text" placeholder="Country" />
                  </div>
                  <div class="col-md-6">
                    <input type="text" placeholder="Zip code" />
                  </div>
                  <div class="col-md-6">
                    <input type="text" placeholder="Phone no." />
                  </div>
                </div>
                <div class="cf-title">Delievery Info</div>
                <div class="row shipping-btns">
                  <div class="col-6">
                    <h4>Standard</h4>
                  </div>
                  <div class="col-6">
                    <div class="cf-radio-btns">
                      <div class="cfr-item">
                        <input type="radio" name="shipping" id="ship-1" />
                        <label for="ship-1">Free</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <h4>Next day delievery </h4>
                  </div>
                  <div class="col-6">
                    <div class="cf-radio-btns">
                      <div class="cfr-item">
                        <input type="radio" name="shipping" id="ship-2" />
                        <label for="ship-2">$3.45</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cf-title">Payment</div>
                <ul class="payment-list">
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
                <button class="site-btn submit-order-btn">Place Order</button>
              </form>
            </div>
            <div class="col-lg-4 order-1 order-lg-2">
              <div class="checkout-cart">
                <h3>Your Cart</h3>
                <ul class="product-list">
                  <li>
                    <div class="pl-thumb">
                      <img src="img/cart/1.jpg" alt="" />
                    </div>
                    <h6>Animal Print Dress</h6>
                    <p>$45.90</p>
                  </li>
                  <li>
                    <div class="pl-thumb">
                      <img src="img/cart/2.jpg" alt="" />
                    </div>
                    <h6>Animal Print Dress</h6>
                    <p>$45.90</p>
                  </li>
                </ul>
                <ul class="price-list">
                  <li>
                    Total<span>$99.90</span>
                  </li>
                  <li>
                    Shipping<span>free</span>
                  </li>
                  <li class="total">
                    Total<span>$99.90</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="footer-section">
        <div class="container">
          <div class="footer-logo text-center">
            <a href="index.html">
              <img src="./img/logo-light.png" alt="" />
            </a>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget about-widget">
                <h2>About</h2>
                <p>
                  Donec vitae purus nunc. Morbi faucibus erat sit amet congue
                  mattis. Nullam frin-gilla faucibus urna, id dapibus erat
                  iaculis ut. Integer ac sem.
                </p>
                <img src="img/cards.png" alt="" />
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget about-widget">
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
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget about-widget">
                <h2>Questions</h2>
                <div class="fw-latest-post-widget">
                  <div class="lp-item">
                    <div
                      class="lp-thumb set-bg"
                      data-setbg="img/blog-thumbs/1.jpg"
                    ></div>
                    <div class="lp-content">
                      <h6>what shoes to wear</h6>
                      <span>Oct 21, 2018</span>
                      <a href="#" class="readmore">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div class="lp-item">
                    <div
                      class="lp-thumb set-bg"
                      data-setbg="img/blog-thumbs/2.jpg"
                    ></div>
                    <div class="lp-content">
                      <h6>trends this year</h6>
                      <span>Oct 21, 2018</span>
                      <a href="#" class="readmore">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget contact-widget">
                <h2>Questions</h2>
                <div class="con-info">
                  <span>C.</span>
                  <p>Your Company Ltd </p>
                </div>
                <div class="con-info">
                  <span>B.</span>
                  <p>1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68 </p>
                </div>
                <div class="con-info">
                  <span>T.</span>
                  <p>+53 345 7953 32453</p>
                </div>
                <div class="con-info">
                  <span>E.</span>
                  <p>office@youremail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="social-links-warp">
          <div class="container">
            <div class="social-links">
              <a href="" class="instagram">
                <i class="fa fa-instagram"></i>
                <span>instagram</span>
              </a>
              <a href="" class="google-plus">
                <i class="fa fa-google-plus"></i>
                <span>g+plus</span>
              </a>
              <a href="" class="pinterest">
                <i class="fa fa-pinterest"></i>
                <span>pinterest</span>
              </a>
              <a href="" class="facebook">
                <i class="fa fa-facebook"></i>
                <span>facebook</span>
              </a>
              <a href="" class="twitter">
                <i class="fa fa-twitter"></i>
                <span>twitter</span>
              </a>
              <a href="" class="youtube">
                <i class="fa fa-youtube"></i>
                <span>youtube</span>
              </a>
              <a href="" class="tumblr">
                <i class="fa fa-tumblr-square"></i>
                <span>tumblr</span>
              </a>
            </div>

            <p class="text-white text-center mt-5">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
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