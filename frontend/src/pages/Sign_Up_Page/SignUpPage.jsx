import React, { useRef } from "react";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "pages/Sign_In_Page/sign-in.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const telephoneRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const postcodeRef = useRef();
  const countryRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        {
          name: nameRef.current.value,
          surname: surnameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          telephone: telephoneRef.current.value,
          address: addressRef.current.value,
          city: cityRef.current.value,
          postcode: postcodeRef.current.value,
          country: countryRef.current.value,
        }
      );

      nameRef.current.value = "";
      surnameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      telephoneRef.current.value = "";
      addressRef.current.value = "";
      cityRef.current.value = "";
      postcodeRef.current.value = "";
      countryRef.current.value = "";
      console.log(data);
      if (data.status === "success") {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="form">
        <form onSubmit={handleSubmit} className="login-form">
          <input ref={nameRef} type="text" placeholder="name" />
          <br />
          <input ref={surnameRef} type="text" placeholder="surname" />
          <br />
          <input ref={emailRef} type="email" placeholder="email" />
          <br />
          <input ref={passwordRef} type="password" placeholder="password" />
          <br />
          <input ref={telephoneRef} type="text" placeholder="tel" />
          <br />
          <input ref={addressRef} type="text" placeholder="address" />
          <br />
          <input ref={cityRef} type="text" placeholder="city" />
          <br />
          <input ref={postcodeRef} type="text" placeholder="postcode" />
          <br />
          <input ref={countryRef} type="text" placeholder="country" />

          <button type="submit" className="btn btn1">
            SIGNUP
          </button>
          <p style={{ marginTop: "10px", paddingLeft: "0 !important" }}>
            Allready have an account? <Link to="/register">Sign in!</Link>
          </p>
          <br />
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
