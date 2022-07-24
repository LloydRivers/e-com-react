import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignInPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
