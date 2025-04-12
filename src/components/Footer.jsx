import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      </main>
      <footer className="bg-violet-950 text-white-700 py-6 mt-4 border-t">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-100">Ambiora</h2>
          <p className="text-sm text-slate-200"  >© {new Date().getFullYear()} Ambiora. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
