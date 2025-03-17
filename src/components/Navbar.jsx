import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from "../assets/logoHireme1.png"

const ResumeNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    {
      title: 'Resume Templates',
      dropdown: true,
      to: '/',
      items: [
        { title: 'Word', to: '/resume-templates/word' },
        { title: 'Simple', to: '/resume-templates/simple' },
        { title: 'Professional', to: '/resume-templates/professional' },
        { title: 'Modern', to: '/resume-templates/modern' },
        { title: 'Creative', to: '/resume-templates/creative' },
        { title: 'ATS', to: '/resume-templates/ats' }
      ]
    },
    {
      title: 'Resume Examples',
      dropdown: true,
      to: '/',
      items: [
        { title: 'Student', to: '/resume-examples/student' },
        { title: 'Professional', to: '/resume-examples/professional' },
        { title: 'Executive', to: '/resume-examples/executive' },
        { title: 'Career Change', to: '/resume-examples/career-change' }
      ]
    },
    {
      title: 'Cover Letter',
      dropdown: true,
     to: '/',
      items: [
        { title: 'Templates', to: '/cover-letter/templates' },
        { title: 'Examples', to: '/cover-letter/examples' },
        { title: 'How to Write', to: '/cover-letter/how-to-write' }
      ]
    },
    {
      title: 'Resources',
      dropdown: true,
      to: '/',
      items: [
        { title: 'Blog',   to: '#' },
        { title: 'Career Advice', to: '#' },
        { title: 'Job Search', to: '#' },
        { title: 'Aboutus', to: '/about-us' }
      ]
    },
    {
      title: 'FAQ',
      dropdown: false,
      to: '/faq'
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
          <div className="flex items-center space-x-1 justify-center text-center">
            <Link to="/">
              <img src={Logo} className='w-[150px]' />
            </Link>
              
          
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <Link
                    to={item.to}
                    className="px-3 py-2 text-gray-700 hover:text-blue-500 flex items-center transition-colors duration-200 font-medium"
                  >
                    {item.title}
                    <button
                      className="ml-1 focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleDropdown(index);
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                  </Link>
                ) : (
                  <Link
                    to={item.to}
                    className="px-3 py-2 text-gray-700 hover:text-blue-500 flex items-center transition-colors duration-200 font-medium"
                  >
                    {item.title}
                  </Link>
                )}

                {/* Desktop Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 left-0 mt-1 w-48 bg-white shadow-lg rounded-lg py-1 border border-gray-100"
                    >
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.to}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
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
      <AnimatePresence>
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
                  {item.dropdown ? (
                    <div>
                      <Link
                        to={item.to}
                        className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-500 flex items-center justify-between"
                      >
                        {item.title}
                        <button
                          className={`w-4 h-4 transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleDropdown(index);
                          }}
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                      </Link>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 py-2 space-y-2 overflow-hidden"
                          >
                            {item.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.to}
                                className="block py-1 text-gray-600 hover:text-blue-500"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-500 flex items-center justify-between"
                    >
                      {item.title}
                    </Link>
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
      </AnimatePresence>
    </div>
  );
};

export default ResumeNavbar;