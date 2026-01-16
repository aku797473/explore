import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function Tv() {
  const tvProducts = useSelector((state) => state.products.tv);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Video */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <video
          src="/tv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-50 contrast-125 saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-cyan-400/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
            Explore TVs
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl">
            Discover the latest Smart TVs with stunning visuals
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-[1400px] mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tvProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </div>
  );
}
