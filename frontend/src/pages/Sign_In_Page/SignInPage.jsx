import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignInPage = () => {
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
      console.log("before request");

      const { data } = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log("after request");
      if (data.status === "success") {
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input ref={emailRef} type="text" name="email" />
        <label htmlFor="">Password</label>
        <input ref={passwordRef} type="password" name="password" />

        <button type="submit">Sign in...</button>
      </form>
    </div>
  );
};

export default SignInPage;
