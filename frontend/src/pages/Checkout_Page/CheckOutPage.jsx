import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { PaymentCard } from "../../components";

import {
  selectCartItems,
  setDeliveryFee,
  selectDeliveryFee,
  selectTotal,
} from "../../Redux/slices/CartSlices/cartSlice";

import { selectUser } from "../../Redux/slices/UserSlice/userSlice";

const CheckOutPage = () => {
  const [address, setAddress] = useState({
    address: "",
    city: "",
    country: "",
    postcode: "",
    telephone: "",
  });
  const [isCreditCard, setIsCreditCard] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  console.log(isCreditCard);

  const dispatch = useDispatch();
  const { id } = useSelector(selectUser);
  const cartList = useSelector(selectCartItems);
  const deliveryFee = useSelector(selectDeliveryFee);
  const total = useSelector(selectTotal);

  const navigate = useNavigate();

  const getUserDetails = async (num) => {
    if (num == 1) {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/userDetails/${id}`
        );

        setAddress(data);
        setIsDisabled(true);
      } catch (error) {
        console.log(error);
      }
    } else if (num === 2) {
      setAddress({ address: "", city: "", country: "", postcode: "" });
      setIsDisabled(false);
    }
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:5000/placeOrder`, {
        cartList,
        address,
        deliveryType: deliveryFee > 0 ? "urgent" : "normal",
        total,
        deliveryFee: deliveryFee,
        id,
        paymentType: isCreditCard,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
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
                        <input
                          value={1}
                          onChange={(e) =>
                            getUserDetails(Number(e.target.value))
                          }
                          type="radio"
                          name="address"
                          id="one"
                        />
                        <label htmlFor="one">Use my regular address</label>
                      </div>
                      <div className="cfr-item">
                        <input
                          onChange={(e) =>
                            getUserDetails(Number(e.target.value))
                          }
                          value={2}
                          type="radio"
                          name="address"
                          id="two"
                        />
                        <label htmlFor="two">Use a different address</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row address-inputs">
                  <div className="col-md-12">
                    <input
                      required
                      disabled={isDisabled ? true : ""}
                      onChange={(e) =>
                        setAddress({ ...address, address: e.target.value })
                      }
                      value={address.address}
                      type="text"
                      placeholder="Address"
                    />
                    <input
                      required
                      disabled={isDisabled ? true : ""}
                      onChange={(e) =>
                        setAddress({ ...address, country: e.target.value })
                      }
                      value={address.country}
                      type="text"
                      placeholder="Country"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      required
                      disabled={isDisabled ? true : ""}
                      onChange={(e) =>
                        setAddress({ ...address, postcode: e.target.value })
                      }
                      value={address.postcode}
                      type="text"
                      placeholder="post code"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      required
                      disabled={isDisabled ? true : ""}
                      onChange={(e) =>
                        setAddress({ ...address, telephone: e.target.value })
                      }
                      value={address.telephone}
                      type="text"
                      placeholder="Phone no."
                    />
                  </div>
                </div>
                <div className="cf-title">Delivery Info</div>
                <div className="row shipping-btns">
                  <div className="col-6">
                    <h4>Standard</h4>
                  </div>
                  <div className="col-6">
                    <div className="cf-radio-btns">
                      <div className="cfr-item">
                        <input
                          required
                          onChange={(e) => dispatch(setDeliveryFee(0))}
                          type="radio"
                          name="shipping"
                          id="ship-1"
                        />
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
                        <input
                          required
                          onChange={(e) => dispatch(setDeliveryFee(3))}
                          type="radio"
                          name="shipping"
                          id="ship-2"
                        />
                        <label htmlFor="ship-2">$3</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cf-title">Payment</div>
                <div className="row shipping-btns">
                  <div className="col-6">
                    <div className="cf-radio-btns">
                      <div className="cfr-item">
                        <input
                          required
                          onChange={(e) => setIsCreditCard(e.target.value)}
                          type="radio"
                          name="payment-details"
                          id="credit-card"
                          value="credit-card"
                        />
                        <label htmlFor="credit-card">Credit / Debit Card</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="cf-radio-btns">
                      <div className="cfr-item">
                        <input
                          required
                          onChange={(e) => setIsCreditCard(e.target.value)}
                          type="radio"
                          name="payment-details"
                          id="cash-on-delivery"
                          value="cash-on-delivery"
                        />
                        <label htmlFor="cash-on-delivery">
                          Cash on delivery
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {isCreditCard === "credit-card" ? <PaymentCard /> : null}

                <button
                  onClick={(e) => placeOrder(e)}
                  className="site-btn submit-order-btn"
                >
                  Place Order
                </button>
              </form>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="checkout-cart">
                <h3>Your Cart</h3>
                <ul className="product-list">
                  {cartList &&
                    cartList.map((item) => {
                      return (
                        <li key={item.id}>
                          <div className="pl-thumb">
                            <img src={item.imageurl} alt="" />
                          </div>
                          <h6>{item.brandname}</h6>
                          <p>${item.price}</p>
                        </li>
                      );
                    })}
                </ul>
                <ul className="price-list">
                  <li>
                    Shipping
                    <span>{deliveryFee > 0 ? "$" + deliveryFee : "free"}</span>
                  </li>
                  <li className="total">
                    Total<span>${total}</span>
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
