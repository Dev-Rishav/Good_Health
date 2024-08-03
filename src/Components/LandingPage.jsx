import Navbar from "./Navbar";
import bgImg from "../Assets/bg.jpg";
import { useNavigate } from "react-router-dom";



const LandingPage = () => {
    const navigate=useNavigate();
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <nav className="flex justify-between items-center mb-8">
        <div className="text-purple-500 text-2xl">Good Health</div>
        <ul className="flex space-x-4 text-sm">
          <li>Home</li>
          <li>Team</li>
          <li>Token</li>
          <li>FAQ</li>
          <li>Connect</li>
        </ul>
      </nav>

      <main className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-3xl p-8 mb-8 relative overflow-hidden">
          <img
            src={bgImg}
            className="absolute inset-0 w-full h-full object-cover filter blur-sm"
          />
          <div className="relative z-10 w-1/2 pr-4 text-white">
            <p className="text-xs mb-2">Mental Health</p>
            <h1 className="text-4xl font-bold mb-4">
              Sustainable Development
            </h1>
            <p className="text-sm mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus qui mollitia, explicabo optio aspernatur nihil! Facere
              ratione deleniti et dolore quibusdam asperiores ea quas minima
              ipsam. Earum ipsum id asperiores.
            </p>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm hover:scale-110 duration-300">
              Break The Cycle
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            "Mental Health",
            "Physical Health",
            "Psycological Healh",
            "Social Health",
          ].map((title, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-2xl">
              <div onClick={()=>navigate(`/post/${title}`)}
               className="flex justify-between items-center mb-2 cursor-pointer">
                <h3 className="font-bold text-sm">{title}</h3>
                <span className="text-xs">{index+1}</span>
              </div>
              <p className="text-xs text-gray-400">Brief description...</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;