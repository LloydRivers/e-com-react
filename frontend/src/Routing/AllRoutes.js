import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HomePage,
  CartPage,
  DetailsPage,
  CheckOutPage,
  ContactPage,
  AddProductForm,
  SignUpPage,
  SignInPage,
} from "../pages";

import { Footer, Header, ProtectedRoute } from "components";

const AllRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/admin/add-products" element={<AddProductForm />} />
        </Route>
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AllRoutes;
