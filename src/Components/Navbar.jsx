import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUsers, FaQuestionCircle, FaSignInAlt} from 'react-icons/fa';


const Navbar = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default Navbar;
