import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import {
  selectCartItems,
  clearCart,
  selectItems,
} from "../../Redux/slices/CartSlices/cartSlice";

import { filterProducts } from "../../Redux/slices/ProductSlices/productsSlice";

import {
  selectIsLoggedIn,
  selectUser,
  logout,
} from "../../Redux/slices/UserSlice/userSlice";

const Header = () => {
  const [search, setSearch] = useState("");
  const cartList = useSelector(selectCartItems);

  const { name } = useSelector(selectUser);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const items = useSelector(selectItems);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(filterProducts(e.target.value.toLowerCase()));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light  mt-2"
      style={{ marginBottom: "30px" }}
    >
      <div className="container-fluid">
        <Link to="/" className="site-logo">
          <img src="/img/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ml-4">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            {cartList.length ? (
              <li className="nav-item">
                <Link className="nav-link" to="/checkout">
                  Checkout
                </Link>
              </li>
            ) : null}
          </ul>
          <form className="header-search-form">
            <input
              style={{ margin: "10px 0px !important" }}
              value={search}
              onChange={handleChange}
              type="text"
              placeholder="Search on divisima ...."
            />
            <button>
              <i className="flaticon-search"></i>
            </button>
          </form>
          <div className="">
            <div className="user-panel">
              {isLoggedIn ? (
                <div className="up-item">
                  <span>Hello {name} /</span>
                  <span onClick={handleLogout}> Logout</span>
                </div>
              ) : (
                <div className="up-item">
                  <i className="flaticon-profile"></i>

                  <Link to="/login">Sign in /</Link>
                  <Link to="/register">Create Account</Link>
                </div>
              )}

              <div className="up-item">
                <div className="shopping-card">
                  <i className="flaticon-bag"></i>
                  <span>{items}</span>
                </div>
                <Link to="/cart">Shopping Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
