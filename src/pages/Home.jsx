import React from "react";
import ProductList from "../components/ProductList";
import products from "../data/products";

export default function Home({ addToCart }) {
  return (
    <div className="bg-gray-50">
 
      <div
        className="relative bg-cover bg-center py-24 md:py-32 semi-trasparent"
        style={{
          backgroundImage:
            "url(./images/er_1.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Welcome to Ambiora
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8">
          Elevate your space with stunning home decor. Browse our handpicked collection of Pinterest-inspired items to bring beauty and style to every corner of your home.
          </p>
          <button className="bg-purple-300 hover:bg-purple-400 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Product List Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Featured Products
        </h2>

        {/* Now ProductList handles the grid itself */}
        <ProductList products={products} addToCart={addToCart} />
      </div>
    </div>
  );
}
