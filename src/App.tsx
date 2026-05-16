import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import BaguaEncyclopedia from "@/pages/BaguaEncyclopedia";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-red-800 to-amber-700 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              ⚡ 梅花易数
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                location.pathname === "/"
                  ? "bg-amber-500 text-white"
                  : "text-amber-100 hover:bg-amber-600 hover:text-white"
              }`}
            >
              起卦
            </Link>
            <Link
              to="/bagua"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                location.pathname === "/bagua"
                  ? "bg-amber-500 text-white"
                  : "text-amber-100 hover:bg-amber-600 hover:text-white"
              }`}
            >
              八卦百科
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bagua" element={<BaguaEncyclopedia />} />
        </Routes>
      </div>
    </Router>
  );
}
