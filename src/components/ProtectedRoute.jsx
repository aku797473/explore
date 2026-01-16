import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    alert("Please login first!");
    return <Navigate to="/login" />;
  }

  return children;
}
