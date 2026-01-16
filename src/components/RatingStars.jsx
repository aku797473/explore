import React from "react";

export default function RatingStars({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="text-yellow-400">★</span>
      ))}
      {halfStar && <span className="text-yellow-400">☆</span>}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <span key={i} className="text-gray-300">★</span>
      ))}
      <span className="ml-2 text-gray-600">({rating})</span>
    </div>
  );
}
