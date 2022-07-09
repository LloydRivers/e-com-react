import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HomePage,
  CartPage,
  DetailsPage,
  CheckOutPage,
  ContactPage,
} from "../pages";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
