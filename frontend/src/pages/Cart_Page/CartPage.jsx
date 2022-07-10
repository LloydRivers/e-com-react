import React from "react";

const CartPage = () => {
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
    </>
  );
};

export default CartPage;
