// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// ✅ Import all pages (folder name: Pages)
import Home from "../Pages/Home";
import Tv from "../Pages/Tv";
import Mobiles from "../Pages/Mobiles";
import Refrigerators from "../Pages/Refrigerators";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Payment from "../Pages/Payment";
import OrderSuccess from "../Pages/OrderSuccess";
import OrderHistory from "../Pages/OrderHistory";
import Login from "../Pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home / Landing */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />

      {/* Product Pages */}
      <Route path="/tv" element={<Tv />} />
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/refrigerators" element={<Refrigerators />} />

      {/* Shopping Flow */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />

      {/* Orders / User */}
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/login" element={<Login />} />

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Page Not Found</p>
            <a
              href="/"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Go to Home
            </a>
          </div>
        }
      />
    </Routes>
  );
}
