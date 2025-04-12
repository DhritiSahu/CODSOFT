// pages/Checkout.jsx
import React from "react";

const Checkout = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.qty}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">Total: ₹{total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
