import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HomePage,
  CartPage,
  DetailsPage,
  CheckOutPage,
  ContactPage,
} from "../pages";

import { Footer, Header } from "components";

const AllRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AllRoutes;
