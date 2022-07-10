import React from "react";

const ContactPage = () => {
  return (
    <>
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
            referrerPolicy="no-referrer-when-downgrade"
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
    </>
  );
};

export default ContactPage;
