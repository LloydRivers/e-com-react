import React from "react";

const DetailsPage = () => {
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
          <h4>Category PAge</h4>
          <div className="site-pagination">
            <a href="">Home</a> /<a href="">Shop</a>
          </div>
        </div>
      </div>

      <section className="product-section">
        <div className="container">
          <div className="back-link">
            <a href="./category.html"> &lt;&lt; Back to Category</a>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="product-pic-zoom">
                <img
                  className="product-big-img"
                  src="img/single-product/1.jpg"
                  alt=""
                />
              </div>
              <div
                className="product-thumbs"
                tabIndex="1"
                style={{ overflow: "hidden", outline: "none" }}
              >
                <div className="product-thumbs-track">
                  <div
                    className="pt active"
                    data-imgbigurl="img/single-product/1.jpg"
                  >
                    <img src="img/single-product/thumb-1.jpg" alt="" />
                  </div>
                  <div className="pt" data-imgbigurl="img/single-product/2.jpg">
                    <img src="img/single-product/thumb-2.jpg" alt="" />
                  </div>
                  <div className="pt" data-imgbigurl="img/single-product/3.jpg">
                    <img src="img/single-product/thumb-3.jpg" alt="" />
                  </div>
                  <div className="pt" data-imgbigurl="img/single-product/4.jpg">
                    <img src="img/single-product/thumb-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 product-details">
              <h2 className="p-title">White peplum top</h2>
              <h3 className="p-price">$39.90</h3>
              <h4 className="p-stock">
                Available: <span>In Stock</span>
              </h4>
              <div className="p-rating">
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o fa-fade"></i>
              </div>
              <div className="p-review">
                <a href="">3 reviews</a>|<a href="">Add your review</a>
              </div>
              <div className="fw-size-choose">
                <p>Size</p>
                <div className="sc-item">
                  <input type="radio" name="sc" id="xs-size" />
                  <label htmlFor="xs-size">32</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="s-size" />
                  <label htmlFor="s-size">34</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="m-size" checked="" />
                  <label htmlFor="m-size">36</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="l-size" />
                  <label htmlFor="l-size">38</label>
                </div>
                <div className="sc-item disable">
                  <input type="radio" name="sc" id="xl-size" disabled />
                  <label htmlFor="xl-size">40</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="xxl-size" />
                  <label htmlFor="xxl-size">42</label>
                </div>
              </div>
              <div className="quantity">
                <p>Quantity</p>
                <div className="pro-qty">
                  <input type="text" value="1" />
                </div>
              </div>
              <a href="#" className="site-btn">
                SHOP NOW
              </a>
              <div id="accordion" className="accordion-area">
                <div className="panel">
                  <div className="panel-header" id="headingOne">
                    <button
                      className="panel-link active"
                      data-toggle="collapse"
                      data-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      information
                    </button>
                  </div>
                  <div
                    id="collapse1"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                      <p>
                        Approx length 66cm/26" (Based on a UK size 8 sample)
                      </p>
                      <p>Mixed fibres</p>
                      <p>
                        The Model wears a UK size 8/ EU size 36/ US size 4 and
                        her height is 5'8"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header" id="headingTwo">
                    <button
                      className="panel-link"
                      data-toggle="collapse"
                      data-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      care details
                    </button>
                  </div>
                  <div
                    id="collapse2"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <img src="./img/cards.png" alt="" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header" id="headingThree">
                    <button
                      className="panel-link"
                      data-toggle="collapse"
                      data-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      shipping & Returns
                    </button>
                  </div>
                  <div
                    id="collapse3"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <h4>7 Days Returns</h4>
                      <p>
                        Cash on Delivery Available
                        <br />
                        Home Delivery
                        <span>3 - 4 days</span>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-sharing">
                <a href="">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-product-section">
        <div className="container">
          <div className="section-title">
            <h2>RELATED PRODUCTS</h2>
          </div>
          <div className="product-slider owl-carousel">
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
                <p>Flamboyant Pink Top</p>
              </div>
            </div>
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
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/3.jpg" alt="" />
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
                <p>Flamboyant Pink Top</p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/4.jpg" alt="" />
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
                <p>Flamboyant Pink Top</p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/6.jpg" alt="" />
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
                <p>Flamboyant Pink Top</p>
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
                  <p>Your Company Ltd</p>
                </div>
                <div className="con-info">
                  <span>B.</span>
                  <p>1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68</p>
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
              <script>document.write(new Date().getFullYear());</script>
              All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true"></i> by
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

export default DetailsPage;
