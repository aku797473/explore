import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border p-4 rounded">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{item.name}</h2>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
}
