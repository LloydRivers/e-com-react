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
    console.log("Submit Clicked!");
    e.preventDefault();
    console.log(`${process.env.REACT_APP_BACKEND_URL}/login`);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          email,
          password,
        }
      );

      console.log(data);
      if (data.status === "success") {
        const myDecodedToken = decodeToken(data.token);
        dispatch(login({ decodedToken: myDecodedToken, token: data.token }));

        navigate("/");
      } else {
        setError(true);
        setErrorMessage(data.message);
        setTimeout(() => {
          setError(false);
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log("err");
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="form">
        {error && (
          <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="login-form">
          <input required ref={emailRef} type="text" placeholder="email" />
          <input
            required
            ref={passwordRef}
            type="password"
            placeholder="password"
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
