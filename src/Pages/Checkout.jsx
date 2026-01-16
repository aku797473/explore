import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [paymentType, setPaymentType] = useState("online");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Pass payment type to Payment page
    navigate("/payment", { state: { paymentType } });
  };

  return (
    <div className="p-8 space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div>
        <label className="mr-4">
          <input
            type="radio"
            name="payment"
            value="online"
            checked={paymentType === "online"}
            onChange={() => setPaymentType("online")}
          />{" "}
          Online
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentType === "cod"}
            onChange={() => setPaymentType("cod")}
          />{" "}
          Cash on Delivery
        </label>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Confirm Order
      </button>
    </div>
  );
}
