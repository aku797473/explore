import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function Home() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const width = marquee.scrollWidth / 2;

    gsap.fromTo(
      marquee,
      { x: 0 },
      { x: -width, duration: 30, ease: "linear", repeat: -1 }
    );
  }, []);

  const links = [
    { to: "/tv", label: "📺 TVs" },
    { to: "/mobiles", label: "📱 Mobiles" },
    { to: "/refrigerators", label: "❄️ Refrigerators" },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      <section className="relative w-full h-[80vh] md:h-screen">
        <video
          src="/home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 animate-fadeInUp">
          <h1 className="text-[clamp(40px,8vw,90px)] font-extrabold tracking-wide">
            TechStore
          </h1>
          <p className="mt-4 text-gray-300 text-[clamp(16px,3vw,24px)]">
            Future of Smart Shopping
          </p>
          <Link
            to="/tv"
            className="mt-8 px-10 py-4 bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            Explore Products
          </Link>
        </div>
      </section>

      <section className="border-t border-gray-700 py-8 bg-black overflow-hidden">
        <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
          {links.map((l, i) => (
            <Link
              key={i}
              to={l.to}
              className="mx-6 px-8 py-4 text-2xl font-bold rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-black hover:scale-110 hover:shadow-xl transition-transform"
            >
              {l.label}
            </Link>
          ))}
          {links.map((l, i) => (
            <Link
              key={i + 10}
              to={l.to}
              className="mx-6 px-8 py-4 text-2xl font-bold rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-black hover:scale-110 hover:shadow-xl transition-transform"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
