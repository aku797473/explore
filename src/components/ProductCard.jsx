import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover"/>
      <div className="p-4">
        <h2 className="font-bold text-lg mb-1">{product.name}</h2>
        <p className="text-gray-700 mb-1">Brand: {product.brand}</p>
        <p className="font-bold mb-1">${product.price}</p>
        <p className="text-yellow-500 font-medium">⭐ {product.rating}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
