import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {FaArrowLeft} from "react-icons/fa";
import healthData from '../JSON/notes.json';

const Post = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const filteredItem = healthData.find((d) => d.title === title);
    setItem(filteredItem);
  }, [title]);

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#F8F4E1] text-[#543310]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#AF8F6F]"></div>
      </div>
    );
  }

  const fallbackImage = "https://via.placeholder.com/400x300?text=Image+Not+Available";

  return (
    <div className="bg-gradient-to-b from-[#F8F4E1] to-[#E8DFC7] text-[#543310] min-h-screen">
      <Navbar/>
      <header className="text-center py-12 px-4 bg-[#AF8F6F] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{item.description}</p>
        </div>
      </header>
      <main className="container mx-auto py-12 px-4">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center text-[#543310] hover:text-orange-500 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </button>

        <section className="space-y-12">
          {item.topics.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    src={card.pointPhoto || fallbackImage}
                    alt={card.pointTitle}
                    className="h-48 w-full object-cover md:w-48"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#543310] mb-4">
                    {card.pointTitle}
                  </h3>
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