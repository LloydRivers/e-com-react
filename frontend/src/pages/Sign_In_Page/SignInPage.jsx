import React, { useRef, useState } from "react";

import "./sign-in.css";
import { decodeToken } from "react-jwt";

import { useDispatch } from "react-redux";

import { login } from "../../Redux/slices/UserSlice/userSlice";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignInPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const { data } = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (data.status === "success") {
        const myDecodedToken = decodeToken(data.token);
        dispatch(login({ decodedToken: myDecodedToken, token: data.token }));

        //state.token = data.token
        //state.isLoggedIn = true
        //state.user = decoded(data.token)

        navigate("/");
      } else {
        setError(true);
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="form">
        <form onSubmit={handleSubmit} className="login-form">
          <input ref={emailRef} type="text" placeholder="email" />
          <input
            ref={passwordRef}
            type="password"
            placeholder="password"
            required
          />
          <button>Sign in </button>
          <p style={{ marginTop: "10px", paddingLeft: "0 !important" }}>
            Don't have an account? <Link to="/register">Sign up!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
