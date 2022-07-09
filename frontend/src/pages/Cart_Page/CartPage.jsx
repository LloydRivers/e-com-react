import React from "react";

const CartPage = () => {
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

      <section className="cart-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-table">
                <h3>Your Cart</h3>
                <div className="cart-table-warp">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-th">Product</th>
                        <th className="quy-th">Quantity</th>
                        <th className="size-th">SizeSize</th>
                        <th className="total-th">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-col">
                          <img src="img/cart/1.jpg" alt="" />
                          <div className="pc-title">
                            <h4>Animal Print Dress</h4>
                            <p>$45.90</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </div>
                        </td>
                        <td className="size-col">
                          <h4>Size M</h4>
                        </td>
                        <td className="total-col">
                          <h4>$45.90</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-col">
                          <img src="img/cart/2.jpg" alt="" />
                          <div className="pc-title">
                            <h4>Ruffle Pink Top</h4>
                            <p>$45.90</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </div>
                        </td>
                        <td className="size-col">
                          <h4>Size M</h4>
                        </td>
                        <td className="total-col">
                          <h4>$45.90</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-col">
                          <img src="img/cart/3.jpg" alt="" />
                          <div className="pc-title">
                            <h4>Skinny Jeans</h4>
                            <p>$45.90</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </div>
                        </td>
                        <td className="size-col">
                          <h4>Size M</h4>
                        </td>
                        <td className="total-col">
                          <h4>$45.90</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="total-cost">
                  <h6>
                    Total with tax <span>$99.90</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 card-right">
              <form className="promo-code-form">
                <input type="text" placeholder="Enter promo code" />
                <button>Submit</button>
              </form>
              <a href="" className="site-btn">
                Proceed to checkout
              </a>
              <a href="" className="site-btn sb-dark">
                Continue shopping
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="related-product-section">
        <div className="container">
          <div className="section-title text-uppercase">
            <h2>Continue Shopping</h2>
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

export default CartPage;
