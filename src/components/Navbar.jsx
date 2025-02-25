import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const navItems = [
    {
      title: 'Resume Templates',
      dropdown: true,
      items: ['Word', 'Simple', 'Professional', 'Modern', 'Creative', 'ATS']
    },
    {
      title: 'Resume Examples',
      dropdown: true,
      items: ['Student', 'Professional', 'Executive', 'Career Change']
    },
    {
      title: 'Cover Letter',
      dropdown: true,
      items: ['Templates', 'Examples', 'How to Write']
    },
    {
      title: 'Resources',
      dropdown: true,
      items: ['Blog', 'Career Advice', 'Job Search']
    },
    {
      title: 'FAQ',
      dropdown: false
    }
  ];

  return (
    <div className="w-full fixed top-0 z-50">
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-gray-200"></div>
      {/* Desktop Navbar */}
      <nav className="relative py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"></div>
            <span className="text-gray-800 font-bold text-xl">Hireme.io</span>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="px-3 py-2 text-gray-700 hover:text-blue-500 flex items-center transition-colors duration-200 font-medium"
                  onClick={() => item.dropdown && toggleDropdown(index)}
                >
                  {item.title}
                  {item.dropdown && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 left-0 mt-1 w-48 bg-white shadow-lg rounded-lg py-1 border border-gray-100"
                  >
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* My Account Button */}
            <button className="ml-4 px-4 py-2 text-blue-500 bg-blue-50/50 border border-blue-200 rounded-lg hover:bg-blue-100/50 hover:border-blue-300 transition-all duration-300 shadow-sm">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden relative bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
        >
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-500 flex items-center justify-between"
                  onClick={() => item.dropdown && toggleDropdown(index)}
                >
                  {item.title}
                  {item.dropdown && (
                    <svg
                      className={`w-4 h-4 transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === index && (
                  <div className="pl-4 py-2 space-y-2">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block py-1 text-gray-600 hover:text-blue-500"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Account Button */}
            <div className="pt-2">
              <button className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 transition duration-300">
                <svg
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ResumeNavbar;