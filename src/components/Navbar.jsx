import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "TV", path: "/tv" },
    { name: "Mobiles", path: "/mobiles" },
    { name: "Refrigerators", path: "/refrigerators" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 p-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-white font-extrabold text-2xl">
          TechStore
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`relative text-white font-semibold transition-transform ${
                hovered === i ? "translate-y-[-3px]" : ""
              }`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-green-500 transition-all ${
                  hovered === i ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
          <Link
            to="/cart"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-green-500 font-bold text-black shadow-lg"
          >
            🛒 {cartItems.length}
          </Link>
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3 bg-black/70 p-4 rounded-lg animate-slideDown">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-white font-semibold text-lg border-b border-gray-500 pb-1"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/cart"
            className="mt-2 py-2 text-center bg-gradient-to-r from-pink-500 to-green-500 text-black font-bold rounded-full"
            onClick={() => setOpen(false)}
          >
            🛒 Cart ({cartItems.length})
          </Link>
        </div>
      )}

      <style>
        {`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown { animation: slideDown 0.3s ease forwards; }
        `}
      </style>
    </nav>
  );
}
