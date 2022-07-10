import React from "react";

const CheckOutPage = () => {
  return (
    <>
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
    </>
  );
};

export default CheckOutPage;
