import { useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './InteractiveRoadmap.css'; 

const InteractiveRoadmap = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      title: "Start with Self-Assessment",
      description: "Understand your current health status by assessing your mental, physical, psychological, and social health.",
    },
    {
      title: "Set Realistic Goals",
      description: "Define clear and achievable health goals that you want to accomplish over time.",
    },
    {
      title: "Develop Healthy Habits",
      description: "Incorporate daily habits such as regular exercise, balanced diet, and mindfulness practices.",
    },
    {
      title: "Monitor Progress",
      description: "Regularly check your progress and make adjustments to your goals and habits as needed.",
    },
    {
      title: "Seek Support",
      description: "Engage with health professionals, join support groups, and leverage resources for guidance.",
    },
    {
      title: "Celebrate Achievements",
      description: "Acknowledge and celebrate your progress and milestones to stay motivated.",
    },
  ];

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-12 interactive-roadmap-enter">
      <h2 className="text-2xl font-bold mb-6 text-center">Interactive Roadmap for Better Health</h2>
      <div className="flex flex-col">
        {steps.map((step, index) => (
          <div key={index} className="mb-4">
            <div
              className={`p-4 rounded-lg cursor-pointer ${index === activeStep ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-gray-700'} flex justify-between items-center`}
              onClick={() => handleStepClick(index)}
            >
              <h3 className="font-bold text-lg">{step.title}</h3>
              {index === activeStep ? <FaArrowDown /> : <FaArrowRight />}
            </div>
            <CSSTransition
              in={index === activeStep}
              timeout={300}
              classNames="subpoint"
              unmountOnExit
            >
              <p className="mt-2 p-4 bg-yellow-100 rounded-lg">{step.description}</p>
            </CSSTransition>
          </div>
        ))}
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-full mt-4"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default InteractiveRoadmap;
