// pages/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setUser }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !surname || !dob || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert("User already exists. Please use a different email.");
      return;
    }

    const newUser = { name, surname, dob, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setUser({ name, surname, dob, email }); // you can use this in profile later
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-2 mb-3 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-2 mb-3 border rounded"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="w-full p-2 mb-3 border rounded"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-700 text-white py-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
