import React from "react";
import tvData from "../data/tvData";

export default function TvGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {tvData.map((tv) => (
        <div
          key={tv.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={tv.image}
            alt={tv.name}
            className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{tv.name}</h3>
            <p className="text-gray-600 mb-1">Brand: {tv.brand}</p>
            <p className="text-gray-800 font-bold mb-1">₹{tv.price.toLocaleString()}</p>
            <p className="text-yellow-500 font-medium">Rating: {tv.rating} ⭐</p>
          </div>
        </div>
      ))}
    </div>
  );
}
