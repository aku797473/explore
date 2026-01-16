import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function Refrigerators() {
  const fridgeProducts = useSelector((state) => state.products.refrigerators);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Video */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <video
          src="/fridge.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-50 contrast-125 saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            Explore Refrigerators
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl">
            Latest refrigerators with advanced cooling technology
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1400px] mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fridgeProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
