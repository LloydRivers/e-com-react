import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { PaymentCard } from "../../components";

import { clearCart } from "../../Redux/slices/CartSlices/cartSlice";

import Swal from "sweetalert2";

import {
  selectCartItems,
  setDeliveryFee,
  selectDeliveryFee,
  selectTotalWithTax,
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
  const [deliveryType, setDeliveryType] = useState("");

  const dispatch = useDispatch();
  const { id } = useSelector(selectUser);
  const cartList = useSelector(selectCartItems);
  const deliveryFee = useSelector(selectDeliveryFee);
  const totalWithTax = useSelector(selectTotalWithTax);

  const navigate = useNavigate();

  const getUserDetails = async (num) => {
    if (num == 1) {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/userDetails/${id}`
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
  // dispatch(setDeliveryFee(3))
  const placeOrder = async (e) => {
    e.preventDefault();
    console.log(address);
    if (
      isCreditCard === "" ||
      address.address === "" ||
      address.country === "" ||
      address.postcode === "" ||
      address.telephone === "" ||
      deliveryType === ""
    ) {
      Swal.fire({
        title: "Please fill all the fields",
        icon: "error",
      });
    } else {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/placeOrder`,
          {
            cartList,
            address,
            deliveryType: deliveryFee > 0 ? "urgent" : "normal",
            total: totalWithTax,
            deliveryFee: deliveryFee,
            id,
            paymentType: isCreditCard,
          }
        );

        if (data.status === "success") {
          Swal.fire({
            title: "Order Placed",
            text: "Order has been placed successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 2500,
          });
          navigate("/");
          dispatch(clearCart());
        }

        // navigate("/");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDeliveryType = (e) => {
    const { value } = e.target;
    if (value === "standard") {
      setDeliveryType("standard");
      dispatch(setDeliveryFee(0));
    }
    if (value === "urgent") {
      setDeliveryType("urgent");
      dispatch(setDeliveryFee(3));
    }
  };
  return (
    <>
      <div className="page-top-info">
        <div className="container">
          <h4>CHECKOUT</h4>
          <div className="site-pagination">
            <Link to="/">Home</Link> /
            <span style={{ paddingLeft: "5px" }} href="">
              Checkout
            </span>
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
                          required
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
                          required
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
                          value="standard"
                          required
                          onChange={(e) => handleDeliveryType(e)}
                          type="radio"
                          name="shipping"
                          id="ship-1"
                        />
                        <label htmlFor="ship-1">Free</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <h4>Next day delivery </h4>
                  </div>
                  <div className="col-6">
                    <div className="cf-radio-btns">
                      <div className="cfr-item">
                        <input
                          value="urgent"
                          required
                          onChange={(e) => handleDeliveryType(e)}
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
                    Total<span>${totalWithTax}</span>
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
