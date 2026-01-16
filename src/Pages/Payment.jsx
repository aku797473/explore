import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../redux/slices/orderSlice";
import { clearCart } from "../redux/slices/cartSlice";

// Import QR image from assets
import qrImage from "../assets/qr.jpg";

export default function Payment() {
  const { state } = useLocation();
  const paymentType = state?.paymentType || "cod";
  const [showQr, setShowQr] = useState(paymentType === "online");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((s) => s.cart);

  useEffect(() => {
    if (paymentType === "online") {
      const timer = setTimeout(() => {
        setShowQr(false);

        dispatch(
          placeOrder({
            items: cartItems,
            totalAmount,
            paymentType: "Online",
            date: new Date().toLocaleString(),
            deliveryDate: new Date(
              Date.now() + 3 * 24 * 60 * 60 * 1000
            ).toLocaleDateString(),
          })
        );

        dispatch(clearCart());
        navigate("/order-success");
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      dispatch(
        placeOrder({
          items: cartItems,
          totalAmount,
          paymentType: "COD",
          date: new Date().toLocaleString(),
          deliveryDate: new Date(
            Date.now() + 3 * 24 * 60 * 60 * 1000
          ).toLocaleDateString(),
        })
      );

      dispatch(clearCart());
      navigate("/order-success");
    }
  }, []);

  return (
    <div className="p-8 text-center">
      {paymentType === "online" ? (
        showQr ? (
          <>
            <h1 className="text-xl font-bold mb-4">Scan QR to Pay</h1>

            <img
              src={qrImage}
              alt="QR Code"
              className="w-48 h-48 mx-auto object-contain border rounded shadow"
            />

            <p className="mt-2 text-gray-600">
              Payment will complete automatically in 5 seconds...
            </p>
          </>
        ) : (
          <p className="text-gray-700">Processing payment...</p>
        )
      ) : (
        <p className="text-gray-700">Processing Cash on Delivery...</p>
      )}
    </div>
  );
}
