import React from "react";
import { useNavigate } from "react-router-dom";

const Faq = () => {

  const navigate=useNavigate()
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <nav className="flex justify-between items-center mb-8">
        <div className="text-purple-500 text-2xl">Good Health</div>
        <ul className="flex space-x-4 text-sm text-purple-100">
          <li onClick={() => navigate("/")} className="cursor-pointer">
            Home
          </li>
          <li onClick={() => navigate("/team")} className="cursor-pointer">
            Team
          </li>
          <li onClick={() => navigate("/faq")} className="cursor-pointer">
            FAQ
          </li>
          <li onClick={() => navigate("/login")} className="cursor-pointer">
            Login
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Faq;
