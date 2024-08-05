import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaArrowLeft } from "react-icons/fa";
import healthData from '../JSON/notes.json';

const Post = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filteredItem = healthData.find((d) => d.title === title);
    setItem(filteredItem);
    setLoading(false);
  }, [title]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#F8F4E1] text-[#543310]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#AF8F6F]"></div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#F8F4E1] text-[#543310]">
        <p className="text-xl mb-4">Post not found.</p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-[#543310] hover:text-orange-500 transition-colors duration-300 bg-white py-2 px-4 rounded-full shadow-md hover:shadow-lg"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </button>
      </div>
    );
  }

  const fallbackImage = "https://via.placeholder.com/400x300?text=Image+Not+Available";

  return (
    <div className="bg-gradient-to-b from-[#F8F4E1] to-[#E8DFC7] text-[#543310] min-h-screen">
      <Navbar />
      <header className="text-center py-16 px-4 bg-gradient-to-r from-[#AF8F6F] to-[#8B6B4F] text-white shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{item.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">{item.description}</p>
        </div>
      </header>
      <main className="container mx-auto py-12 px-4 animate-fadeIn">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center text-[#543310] hover:text-orange-500 transition-colors duration-300 bg-white py-2 px-4 rounded-full shadow-md hover:shadow-lg"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </button>

        <section className="space-y-12">
          {item.topics.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    src={card.pointPhoto || fallbackImage}
                    alt={card.pointTitle}
                    className="h-48 w-full object-cover md:w-48 md:h-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#543310] mb-4 border-b-2 border-[#AF8F6F] pb-2">
                    {card.pointTitle}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {card.pointDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Post;