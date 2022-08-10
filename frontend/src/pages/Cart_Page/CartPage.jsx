import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { CartCard } from "components";

import {
  selectCartItems,
  checkPromoCode,
  calculateTotal,
  selectTotalWithTax,
} from "../../Redux/slices/CartSlices/cartSlice";

const CartPage = () => {
  const [promoCode, setPromoCode] = useState("");
  const dispatch = useDispatch();

  const cartList = useSelector(selectCartItems);

  const totalWithTax = useSelector(selectTotalWithTax);

  const handlePromoCode = (e) => {
    setPromoCode("");
    dispatch(checkPromoCode(promoCode));
  };

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartList]);

  return (
    <>
      <div className="page-top-info">
        <div className="container">
          <h4>Your cart</h4>
          <div className="site-pagination">
            <Link to="/">Home</Link> /
            <span style={{ paddingLeft: "5px" }} to="/cart">
              Your cart
            </span>
          </div>
        </div>
      </div>

      <section className="cart-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-table">
                <h3>{cartList.length > 0 ? "Your Cart" : "Cart Empty"}</h3>

                {cartList.length > 0 ? (
                  <>
                    <div className="cart-table-warp">
                      <table>
                        <thead>
                          <tr>
                            <th className="product-th">Product</th>
                            <th className="quy-th">Quantity</th>
                            <th className="size-th">Size</th>
                            <th className="total-th">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartList.map((cartProduct) => (
                            <CartCard
                              key={cartProduct.id}
                              cartProduct={cartProduct}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : null}
                {cartList.length > 0 ? (
                  <div className="total-cost">
                    <h6>
                      Total with tax: <span>${totalWithTax}</span>
                    </h6>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-lg-4 card-right">
              {cartList.length ? (
                <>
                  <Link to="/checkout" className="site-btn">
                    Proceed to checkout
                  </Link>
                  <Link to="/" className="site-btn sb-dark">
                    Continue shopping
                  </Link>
                </>
              ) : (
                <Link to="/" className="site-btn sb-dark">
                  Continue shopping
                </Link>
              )}
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
