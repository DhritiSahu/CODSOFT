import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cartCount, cartTotal, user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-400">
          Ambiora
        </Link>

        <div className="flex items-center gap-6">
         
          <Link
            to="/"
            className="text-gray-600 hover:text-purple-600"
          >
            Home
          </Link>

          {/* 👉 Auth Buttons FIRST */}
          {user ? (
            <>
              <Link
                to="/account"
                className="text-gray-600 hover:text-purple-600"
              >
                My Account
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:underline font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-purple-600"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-gray-600 hover:text-purple-600">
              
                Sign Up
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-purple-600">
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-purple-600"
              >
                Contact Us
              </Link>
            </>
          )}

          {/* 🛒 Cart Info */}
          <div className="flex items-center justify-end space-x-2 text-gray-700">
            <span role="img" aria-label="cart" className="text-xl">
              🛒
            </span>
            <span className="font-medium">Items: {cartCount}</span>
            <span className="font-medium">Total: ₹{cartTotal?.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <Link
            to="/checkout"
            className="bg-purple-400 hover:bg-purple-700 text-white px-4 py-2 rounded transition"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
