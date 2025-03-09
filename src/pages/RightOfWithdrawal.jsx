import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function RightOfWithdrawalPage() {
    const [activeSection, setActiveSection] = useState(null);
    const [showBackToTop, setShowBackToTop] = useState(false);

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const policySections = [
        {
            id: 'introduction',
            title: 'Introduction',
            icon: '📄',
            content: 'This Right of Withdrawal policy outlines your rights to cancel or withdraw from any contract or purchase made on our platform. We are committed to ensuring transparency and fairness in all our transactions.'
        },
        {
            id: 'withdrawal-period',
            title: 'Withdrawal Period',
            icon: '⏳',
            content: 'You have the right to withdraw from any contract within 14 days without giving any reason. The withdrawal period will expire after 14 days from the day of the conclusion of the contract or receipt of goods.'
        },
        {
            id: 'how-to-withdraw',
            title: 'How to Exercise Your Right',
            icon: '✍️',
            content: 'To exercise your right of withdrawal, you must inform us of your decision by an unequivocal statement (e.g., a letter sent by post, fax, or email). You may use the model withdrawal form provided, but it is not obligatory.'
        },
        {
            id: 'effects',
            title: 'Effects of Withdrawal',
            icon: '🔄',
            content: 'If you withdraw from this contract, we shall reimburse all payments received from you, including the costs of delivery (with the exception of supplementary costs resulting from your choice of delivery). Reimbursement will be processed without undue delay.'
        },
        {
            id: 'exceptions',
            title: 'Exceptions',
            icon: '⚠️',
            content: 'The right of withdrawal does not apply to certain types of contracts, including fully performed services, sealed goods that are not suitable for return due to health protection or hygiene reasons, and custom-made goods.'
        },
        {
            id: 'refund-process',
            title: 'Refund Process',
            icon: '💸',
            content: 'We will carry out the reimbursement using the same means of payment as you used for the initial transaction unless expressly agreed otherwise. You will not incur any fees as a result of the reimbursement.'
        },
        {
            id: 'return-shipping',
            title: 'Return Shipping',
            icon: '📦',
            content: 'You will have to bear the direct cost of returning the goods. You are only liable for any diminished value of the goods resulting from handling other than what is necessary to establish the nature, characteristics, and functioning of the goods.'
        },
        {
            id: 'contact',
            title: 'Contact Us',
            icon: '📧',
            content: 'If you have any questions about our Right of Withdrawal policy, please contact our customer service team at support@example.com or through the contact information provided on our Site.'
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

            {/* Header Section */}
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

            {/* Document Tabs */}
            <div className="bg-white shadow-sm border-t border-b border-gray-200">
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
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Sidebar Navigation */}
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
                                <h2 className="text-2xl font-bold text-gray-900">Right of Withdrawal</h2>
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

            {/* Mobile Bottom Navigation */}
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
        </div>
    );
}

export default RightOfWithdrawalPage;