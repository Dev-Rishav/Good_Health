import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHome, FaUsers, FaQuestionCircle, FaSignInAlt, FaArrowLeft } from 'react-icons/fa';

const Post = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Physical Health",
      description:
        "Physical health refers to the well-being of the body and its ability to function optimally in daily activities.",
      topics: [
        {
          pointTitle: "Healthy Eating",
          pointPhoto:
            "https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
          pointDescription:
            "Focus on a balanced diet with plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats. Stay hydrated by drinking plenty of water throughout the day. Limit processed foods, sugar, and unhealthy fats.",
        },
        {
          pointTitle: "Regular Exercise",
          pointPhoto:
            "https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
          pointDescription:
            "Regular exercise refers to the consistent practice of physical activities aimed at improving or maintaining overall health and fitness. It involves a variety of movements that work different parts of the body, providing numerous benefits to physical and mental well-being.",
        },
      ],
    },
  ];

  const { title } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const filteredItem = data.find((d) => d.title === title);
    setItem(filteredItem);
  }, [title]);

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#F8F4E1] text-[#543310]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#AF8F6F]"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#F8F4E1] to-[#E8DFC7] text-[#543310] min-h-screen">
      <nav className="flex justify-between items-center py-6 px-8 bg-[#F8F4E1] shadow-md">
        <div className="text-[#543310] text-3xl font-bold">Good Health</div>
        <ul className="flex space-x-6 text-sm">
          {[
            { name: 'Home', icon: FaHome, path: '/' },
            { name: 'Team', icon: FaUsers, path: '/team' },
            { name: 'About', icon: FaQuestionCircle, path: '/about' },
            { name: 'Login', icon: FaSignInAlt, path: '/login' },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => navigate(item.path)}
              className="cursor-pointer flex items-center hover:text-orange-500 transition-colors duration-300"
            >
              <item.icon className="mr-2" />
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      <header className="text-center py-12 px-4 bg-[#AF8F6F] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{item.description}</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <button 
          onClick={() => navigate('/')} 
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
                    src={card.pointPhoto}
                    alt={card.pointTitle}
                    className="h-48 w-full object-cover md:w-48"
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