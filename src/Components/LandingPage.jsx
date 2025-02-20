import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa";
import InteractiveRoadmap from "./InteractiveRoadmap";
import { CSSTransition } from "react-transition-group";
import bgImg from "../Assets/bg2.jpg";
import './LandingPage.css'; 

const LandingPage = () => {
  const navigate = useNavigate();
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [animatedCards, setAnimatedCards] = useState([]);

  const handleBreakTheCycleClick = () => {
    setShowRoadmap(!showRoadmap);
  };

  const handleRoadmapClose = () => {
    setShowRoadmap(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedCards(["Mental Health", "Physical Health", "Psychological Health", "Social Health"]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#F8F4E1] to-[#E8DFC7] text-[#543310] min-h-screen">
      <Navbar />
      <div className="p-6">
        <main className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-3xl p-12 mb-12 relative overflow-hidden shadow-2xl ">
            <img
              src={bgImg}
              className=" md:block hidden absolute inset-0 w-full h-full object-cover opacity-50"
              alt="Background"
            />
            <div className=" p-4 relative z-10 w-1/2 pr-4 text-white slide-in-left">
              <p className="text-sm mb-2 text-yellow-400">IBM CBR'S</p>
              <h1 className="text-5xl font-bold mb-6">Sustainable Development</h1>
              <p className="text-lg mb-8 leading-relaxed">
                Embark on a journey towards better mental health and sustainable
                well-being. Our expert-guided approach helps you build resilience,
                foster personal growth, and create lasting positive change in your
                life.
              </p>
              <button
                className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold 
                  hover:bg-yellow-300 transition-all duration-300 flex items-center"
                onClick={handleBreakTheCycleClick}
              >
                Break The Cycle
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          <CSSTransition
            in={showRoadmap}
            timeout={300}
            classNames="roadmap"
            unmountOnExit
          >
            <InteractiveRoadmap onClose={handleRoadmapClose} />
          </CSSTransition>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${showRoadmap ? 'mt-12' : 'mt-0'}`}>
            {["Mental Health", "Physical Health", "Psychological Health", "Social Health"].map(
              (title, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 ${
                    animatedCards.includes(title) ? 'animate-slide-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    onClick={() => navigate(`/post/${title}`)}
                    className="flex justify-between items-center mb-4 cursor-pointer"
                  >
                    <h3 className="font-bold text-lg text-[#543310]">{title}</h3>
                    <span className="text-sm bg-yellow-400 text-black px-3 py-1 rounded-full">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Discover strategies and insights to improve your {title.toLowerCase()}...
                  </p>
                  <button
                    onClick={() => navigate(`/post/${title}`)}
                    className="mt-4 text-orange-500 hover:text-orange-600 transition-colors duration-300 flex items-center"
                  >
                    Learn more
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;