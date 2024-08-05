import React from 'react';
import { FaDribbble, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <nav className="mb-6 md:mb-0">
            <ul className="flex space-x-6">
              {['Work', 'About', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-lg hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-6">
            {[
              { Icon: FaDribbble, label: 'Dribbble' },
              { Icon: FaTwitter, label: 'Twitter' },
              { Icon: FaInstagram, label: 'Instagram' },
              { Icon: FaLinkedin, label: 'LinkedIn' },
              { Icon: FaFacebook, label: 'Facebook' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-2xl hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-sm">
          <p className="mb-2">&copy; Copyright 2024 Good Health</p>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
