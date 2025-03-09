import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const popularArticles = [
    { id: 1, title: "How to maximize your resume's impact", category: 1 },
    { id: 2, title: "Understanding our flexible subscription options", category: 2 },
    { id: 3, title: "Export options and compatibility guide", category: 1 },
    { id: 4, title: "Billing cycles explained", category: 2 },
    { id: 5, title: "Sharing your portfolio with employers", category: 3 },
    { id: 6, title: "Advanced customization techniques", category: 1 },
    { id: 7, title: "Premium features comprehensive overview", category: 2 },
    { id: 8, title: "Quick-start guide for new users", category: 1 }
  ];

  const categories = [
    { id: 1, title: "Resume Crafting", icon: "📄", articles: 16 },
    { id: 2, title: "Account & Billing", icon: "💳", articles: 8 },
    { id: 3, title: "Career Development", icon: "🚀", articles: 12 }
  ];

  useEffect(() => {
    // Auto-focus the search input on page load
    const timer = setTimeout(() => {
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.focus();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Filtered articles based on search query
  const filteredArticles = searchQuery.length > 0
    ? popularArticles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : popularArticles;

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const categoryVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, y: -5 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen mt-[50px] bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 p-4 md:p-8">
      {/* Animated floating shapes background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-300 opacity-20"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Header Section with animated title */}
      <div className="text-center mb-12 pt-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-indigo-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How can we assist you today?
        </motion.h1>

        <motion.div
          className="max-w-2xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className={`absolute inset-0 bg-white rounded-xl shadow-lg ${isSearchFocused ? 'shadow-indigo-300/50' : ''}`}
            animate={{
              scale: isSearchFocused ? 1.02 : 1,
              boxShadow: isSearchFocused ? "0 10px 25px rgba(99, 102, 241, 0.2)" : "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.2 }}
          />
          <div className="relative">
            <input
              id="search-input"
              type="text"
              placeholder="What do you need help with?"
              className="w-full p-4 pr-12 rounded-xl border border-indigo-100 bg-transparent z-10 relative focus:outline-none focus:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <motion.div
              className="absolute right-4 top-4 text-indigo-500"
              animate={{ rotate: isSearchFocused ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Categories Section with interactive card effects */}
      <motion.div
        className="max-w-6xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-indigo-900 text-center">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className={`bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 cursor-pointer transition-all duration-300 ${activeCategory === category.id ? 'ring-4 ring-indigo-500' : ''
                }`}
              variants={categoryVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveCategory(
                activeCategory === category.id ? null : category.id
              )}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="text-4xl mb-3"
                  animate={{
                    rotate: activeCategory === category.id ? [0, -10, 10, -10, 10, 0] : 0,
                    scale: activeCategory === category.id ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="font-bold text-xl mb-2 text-indigo-800">{category.title}</h3>
                <div className="flex items-center">
                  <span className="text-indigo-600 font-medium">{category.articles} articles</span>
                  <motion.svg
                    className="w-4 h-4 ml-2 text-indigo-500"
                    animate={{ x: activeCategory === category.id ? 5 : 0 }}
                    transition={{ duration: 0.3, yoyo: Infinity, repeatDelay: 0.5 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Popular Articles Section with staggered animations */}
      <motion.div
        className="max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-indigo-900">Most Popular Resources</h2>

        {searchQuery && filteredArticles.length === 0 ? (
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600 mb-2">No results found for "{searchQuery}"</p>
            <p className="text-indigo-600">Try a different search term or browse categories</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            {(activeCategory ?
              filteredArticles.filter(a => a.category === activeCategory) :
              filteredArticles
            ).map((article) => (
              <motion.div
                key={article.id}
                className="flex items-center group"
                variants={itemVariants}
              >
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M5 7l5 5-5 5" />
                  </svg>
                </motion.div>

                <a href="#" className="text-indigo-700 hover:text-indigo-900 font-medium group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  {article.title}
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Contact section */}
      <motion.div
        className="max-w-3xl mx-auto text-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-indigo-800 mb-3">Can't find what you're looking for?</p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
          Contact Support
        </button>
      </motion.div>
    </div>
  );
}

export default FaqPage;