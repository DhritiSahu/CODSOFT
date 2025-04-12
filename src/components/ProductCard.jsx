import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-[400px]">
      <div className="flex flex-col h-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded"
        />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">₹{product.price.toFixed(2)}</p>
      </div>

      {/* Add to Cart button pinned at the bottom */}
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-purple-300 hover:bg-purple-400 text-white font-semibold py-2 rounded transition duration-300 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
