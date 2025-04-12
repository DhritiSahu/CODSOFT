// pages/MyAccount.jsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MyAccount({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">My Account</h2>
      <p className="text-lg">Welcome, <span className="font-medium">{user?.email}</span> 👋</p>
    </div>
  );
}
