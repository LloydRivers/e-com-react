import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../Redux/slices/UserSlice/userSlice";

function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsLoggedIn);
  console.log("this", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
