import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-700 text-lg my-2">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-purple-300 hover:bg-purple-600 text-white px-4 py-2 rounded transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
