export default function Cart({ cart, removeFromCart }) {
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  
    return (
      <div className="p-4 bg-gray-100 rounded shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-3">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name} x {item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
        <div className="font-bold mt-4">Total: ${total.toFixed(2)}</div>
      </div>
    );
  }
  