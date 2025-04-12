import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import MyAccount from "./pages/MyAccount";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs"
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";



function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar
        cartCount={cart.reduce((acc, item) => acc + item.qty, 0)}
        cartTotal={cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
        user={user}
        setUser={setUser}
      />

      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/account" element={<MyAccount user={user} />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
