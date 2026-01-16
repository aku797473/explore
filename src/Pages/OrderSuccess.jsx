// src/pages/OrderSuccess.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-gray-700 mb-4">
        Your order has been placed and will arrive in 3 days.
      </p>
      <Link
        to="/order-history" // Make sure this matches your Route path
        className="text-blue-500 underline mt-4 inline-block hover:text-blue-700"
      >
        View Order History
      </Link>
    </div>
  );
}
