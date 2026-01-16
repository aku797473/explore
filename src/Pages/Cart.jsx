import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cartItems.length === 0)
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        <Link to="/" className="text-blue-500 underline mt-4 inline-block">
          Go Shopping
        </Link>
      </div>
    );

  return (
    <div className="p-8 space-y-4">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 rounded"
        >
          <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
          <div className="flex-1 ml-4">
            <h2 className="font-bold">{item.name}</h2>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="text-right font-bold text-xl">
        Total: ${totalAmount.toFixed(2)}
      </div>
      <div className="text-right">
        <Link
          to="/checkout"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Place Order
        </Link>
      </div>
    </div>
  );
}
