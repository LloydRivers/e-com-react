import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { selectCartItems } from "../../Redux/slices/CartSlices/cartSlice";

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

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(filterProducts(e.target.value));
  };

  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
  };

  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 text-center text-lg-left">
              <a href="./index.html" className="site-logo">
                <img src="/img/logo.png" alt="" />
              </a>
            </div>
            <div className="col-xl-6 col-lg-5">
              <form className="header-search-form">
                <input
                  value={search}
                  onChange={handleChange}
                  type="text"
                  placeholder="Search on divisima ...."
                />
                <button>
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="user-panel">
                {isLoggedIn ? (
                  <div style={{ border: "1px solid red" }} className="up-item">
                    <span>Hello {name}</span>
                    <button onClick={handleLogout}>Logout</button>
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
                    <span>{cartList.length}</span>
                  </div>
                  <Link to="/cart">Shopping Cart</Link>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
