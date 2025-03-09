import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState("cookie policy");
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Monitor scroll position to show/hide back to top button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Scroll to section function
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    // Policy sections
    const policySections = [
        {
            id: 'introduction',
            title: 'Introduction',
            icon: '👋',
            content: 'Thank you for choosing to be part of our community. We are committed to protecting your personal data and respecting your privacy rights. This cookie policy explains how personal data are collected through cookies and how cookies are used when you access or use our site or related mobile applications.'
        },
        {
            id: 'what-are-cookies',
            title: 'What Are Cookies',
            icon: '🍪',
            content: 'Cookies are small text files that are stored on your browser when you visit our Site. Your browser saves these Cookies on your device\'s hard drive. Some of these Cookies are necessary for the proper functioning of our Site, while others help us improve your experience, personalize content, and analyze usage patterns.'
        },
        {
            id: 'types-of-cookies',
            title: 'Types of Cookies We Use',
            icon: '🔍',
            content: 'Essential Cookies: These are necessary for the Site to function and cannot be switched off. Performance Cookies: These allow us to count visits and traffic sources so we can measure and improve the performance of our Site. Functionality Cookies: These enable enhanced functionality and personalization. Targeting Cookies: These cookies may be set through our Site by our advertising partners to build a profile of your interests.'
        },
        {
            id: 'managing-cookies',
            title: 'Managing Your Cookies',
            icon: '⚙️',
            content: 'Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. To understand these settings, you can use the "Help" option in your browser or visit websites such as www.allaboutcookies.org which explains how to manage and delete cookies across different browsers.'
        },
        {
            id: 'data-collection',
            title: 'Data Collection & Usage',
            icon: '📊',
            content: 'Through cookies, we may collect information such as your IP address, browser type, operating system, referring URLs, device information, pages visited, and time spent on the Site. We use this information to analyze trends, administer the Site, track user movements around the Site, and gather demographic information about our user base as a whole.'
        },
        {
            id: 'third-parties',
            title: 'Third-Party Cookies',
            icon: '🤝',
            content: 'Some cookies are placed by third parties on our behalf. These third parties may include analytics providers, advertising networks, and social media platforms. These third parties may use cookies, web beacons, and similar technologies to collect information about your use of our Site and other websites.'
        },
        {
            id: 'updates',
            title: 'Policy Updates',
            icon: '🔄',
            content: 'We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.'
        },
        {
            id: 'contact',
            title: 'Contact Us',
            icon: '✉️',
            content: 'If you have any questions about our use of cookies or this Cookie Policy, please contact us at privacy@example.com or through the contact information provided on our Site.'
        }
    ];
    const navpills = [
        {
            name: "right to withdraowl",
            to: "/right-of-withdrawal"
        },
        {
            name: "Terms of Service",
            to: "/terms-of-service"
        }, {
            name: "cookie policy",
            to: "/privacy"
        }

    ]
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    const highlightVariants = {
        inactive: { width: '0%' },
        active: {
            width: '100%',
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-md py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <div className="ml-2 text-xl font-bold text-blue-600">resume.io</div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            {['Resume Templates', 'Resume Examples', 'Cover Letter', 'Resources', 'FAQ'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                    <button className="hidden md:block bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg text-sm font-medium">
                        My Account
                    </button>
                    <button className="md:hidden text-gray-500">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Header */}
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        className="text-4xl font-extrabold text-blue-600 sm:text-5xl sm:tracking-tight lg:text-6xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Legal Documents
                    </motion.h1>
                    <motion.p
                        className="mt-5 max-w-xl mx-auto text-xl text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        All documents were updated
                        <br />
                        <span className="font-semibold">on July 20, 2022</span>
                    </motion.p>
                </div>
            </header>

            {/* Nav Pills */}
            <div className="bg-white shadow-sm border-t border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto py-4 space-x-8 scrollbar-hide">
                        {navpills.map((item) => (
                            <motion.button
                                key={item.name}
                                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${item === 'Cookie Policy'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-600 hover:text-blue-600'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to={item.to}>
                                    {item.name}
                                </Link>


                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Sticky Sidebar */}
                    <motion.aside
                        className="hidden lg:block lg:col-span-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <nav className="sticky top-8 space-y-1">
                            {policySections.map((section) => (
                                <motion.button
                                    key={section.id}
                                    className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md relative group"
                                    onClick={() => scrollToSection(section.id)}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={`mr-3 flex-shrink-0 ${activeSection === section.id ? 'text-blue-600' : 'text-gray-500'}`}>
                                        <span className="text-lg">{section.icon}</span>
                                    </div>
                                    <span className={activeSection === section.id ? 'text-blue-700' : 'text-gray-600'}>
                                        {section.title}
                                    </span>
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
                                        variants={highlightVariants}
                                        initial="inactive"
                                        animate={activeSection === section.id ? "active" : "inactive"}
                                    />
                                </motion.button>
                            ))}
                        </nav>
                    </motion.aside>

                    {/* Main Content */}
                    <main className="mt-8 lg:mt-0 lg:col-span-9">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900">Cookie Policy</h2>
                                <p className="mt-1 text-sm text-gray-500">Last Updated: July 20, 2022</p>
                            </div>
                            <div className="px-4 py-5 sm:p-6">
                                <motion.div
                                    className="space-y-12"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {policySections.map((section) => (
                                        <motion.section
                                            key={section.id}
                                            id={section.id}
                                            className="scroll-mt-24"
                                            variants={itemVariants}
                                        >
                                            <div className="flex items-center mb-4">
                                                <span className="text-2xl mr-3">{section.icon}</span>
                                                <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                                            </div>
                                            <div className="mt-2 text-gray-700 leading-relaxed">
                                                <p>{section.content}</p>
                                            </div>
                                            <div className="w-16 h-1 bg-blue-100 rounded-full mt-8"></div>
                                        </motion.section>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Quick Access on Mobile */}
            <motion.div
                className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-10"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <div className="flex overflow-x-auto py-3 px-4 space-x-4">
                    {policySections.map((section) => (
                        <button
                            key={section.id}
                            className="flex-shrink-0 flex flex-col items-center justify-center px-3 py-1"
                            onClick={() => scrollToSection(section.id)}
                        >
                            <span className="text-xl">{section.icon}</span>
                            <span className="text-xs font-medium text-gray-600 mt-1 whitespace-nowrap">
                                {section.title.length > 10 ? `${section.title.substring(0, 10)}...` : section.title}
                            </span>
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
                className="fixed bottom-20 right-6 bg-blue-600 text-white rounded-full p-3 shadow-lg lg:bottom-6"
                onClick={scrollToTop}
                initial={{ opacity: 0 }}
                animate={{ opacity: showBackToTop ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </motion.button>

            {/* Footer */}
            <footer className="bg-white mt-12 border-t border-gray-200">
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <p className="text-center text-base text-gray-500">
                        &copy; 2022 resume.io. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default PrivacyPolicyPage;