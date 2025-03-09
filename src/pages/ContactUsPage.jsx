import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isHovered, setIsHovered] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    const socialLinks = [
        { name: 'LinkedIn', icon: '🔗', link: '#' },
        { name: 'Twitter', icon: '🐦', link: '#' },
        { name: 'GitHub', icon: '💻', link: '#' },
        { name: 'Instagram', icon: '📸', link: '#' }
    ];

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
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <div className="min-h-screen mt-[50px] bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 md:p-8 relative overflow-hidden">
            {/* Animated background shapes */}
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

            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <motion.div
                    className="text-center mb-12"
                    variants={itemVariants}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get in Touch</h1>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form Section */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-800 mb-2 font-medium">Name</label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-50 border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 mb-2 font-medium">Email</label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-50 border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 mb-2 font-medium">Subject</label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-50 border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 mb-2 font-medium">Message</label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-50 border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 resize-none"
                                    required
                                ></motion.textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information Section */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-8"
                    >
                        {/* Office Information */}
                        <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Office</h3>
                            <div className="space-y-4 text-gray-700">
                                <p>📍 123 Business Avenue</p>
                                <p>📞 +1 (555) 123-4567</p>
                                <p>✉️ contact@hireme.io</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Connect With Us</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                                        onHoverStart={() => setIsHovered(index)}
                                        onHoverEnd={() => setIsHovered(null)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.span
                                            animate={{
                                                rotate: isHovered === index ? [0, -10, 10, -10, 10, 0] : 0,
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {social.icon}
                                        </motion.span>
                                        <span>{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-indigo-800 mb-4">Business Hours</h3>
                            <div className="space-y-2 text-indigo-600">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default ContactUsPage;