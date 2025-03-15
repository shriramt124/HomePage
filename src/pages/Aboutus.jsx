import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Avatar, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

function Aboutus() {
    const [activeSection, setActiveSection] = useState('mission');
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
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            bio: 'Former HR executive with 15+ years of experience in talent acquisition. Sarah founded HireMe AI to revolutionize how job seekers approach the application process.',
            avatar: '👩💻'
        },
        {
            name: 'Michael Chen',
            role: 'CTO',
            bio: 'AI specialist with a background in machine learning and natural language processing. Michael leads our technical team in developing cutting-edge resume optimization algorithms.',
            avatar: '👨💻'
        },
        {
            name: 'Priya Patel',
            role: 'Head of Career Services',
            bio: 'Certified career coach with expertise in professional development and job search strategies. Priya ensures our platform provides actionable career guidance.',
            avatar: '👩💼'
        },
        {
            name: 'James Wilson',
            role: 'Lead UX Designer',
            bio: 'Award-winning designer focused on creating intuitive, accessible user experiences. James is passionate about making complex tools simple to use.',
            avatar: '👨🎨'
        }
    ];

    const milestones = [
        {
            year: '2019',
            title: 'Company Founded',
            description: 'HireMe AI was established with a mission to democratize access to professional resume building tools.'
        },
        {
            year: '2020',
            title: 'First AI Algorithm',
            description: 'Launched our proprietary ATS-optimization algorithm, helping thousands of job seekers pass through applicant tracking systems.'
        },
        {
            year: '2021',
            title: 'Global Expansion',
            description: 'Expanded services to support job seekers worldwide with localized resume formats and regional job market insights.'
        },
        {
            year: '2022',
            title: 'AI Interview Coach',
            description: 'Introduced our AI Interview Coach feature, providing personalized interview preparation and real-time feedback.'
        },
        {
            year: '2023',
            title: '1 Million Users',
            description: 'Celebrated reaching 1 million users and launched enhanced job matching capabilities powered by advanced AI.'
        }
    ];

    const features = [
        {
            icon: '📄',
            title: 'AI-Powered Resume Builder',
            description: 'Instantly create professional, ATS-friendly resumes optimized for success'
        },
        {
            icon: '📝',
            title: 'Smart Cover Letters',
            description: 'Let AI craft compelling cover letters tailored to each job application'
        },
        {
            icon: '🤖',
            title: 'AI Mock Interviews',
            description: 'Practice with AI-driven interview simulations and get real-time feedback'
        },
        {
            icon: '🔍',
            title: 'Job Finder',
            description: 'AI scans global job boards for personalized opportunities based on your profile'
        },
        {
            icon: '📊',
            title: 'Performance Analysis',
            description: 'Get AI insights to refine your resume and maximize hiring chances'
        }
    ];

    const FloatingElement = styled(motion.div)({
        position: 'absolute',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05))',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 relative overflow-hidden">
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <FloatingElement
                    style={{
                        width: '300px',
                        height: '300px',
                        top: '10%',
                        left: '-150px',
                        opacity: 0.5,
                    }}
                    animate={{
                        y: [0, 50, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
                <FloatingElement
                    style={{
                        width: '200px',
                        height: '200px',
                        bottom: '10%',
                        right: '-100px',
                        opacity: 0.3,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-300 opacity-20"
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

            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        className="text-4xl font-extrabold text-blue-600 sm:text-5xl sm:tracking-tight lg:text-6xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About HireMe AI
                    </motion.h1>
                    <motion.p
                        className="mt-5 max-w-xl mx-auto text-xl text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Empowering careers with AI-driven tools for job seekers worldwide
                    </motion.p>
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className="mr-4"
                            onClick={() => scrollToSection('mission')}
                        >
                            Learn More
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            onClick={() => scrollToSection('technology')}
                        >
                            Our Technology
                        </Button>
                    </motion.div>
                </div>
            </header>

            <div className="bg-white shadow-sm border-t border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto py-4 space-x-8 scrollbar-hide">
                        {[
                            { id: 'mission', label: 'Our Mission' },
                            { id: 'story', label: 'Our Story' },
                            { id: 'team', label: 'Our Team' },
                            { id: 'technology', label: 'Our Technology' }
                        ].map((item) => (
                            <motion.button
                                key={item.id}
                                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${activeSection === item.id
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-600 hover:text-blue-600'
                                    }`}
                                onClick={() => scrollToSection(item.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.section
                    id="mission"
                    className="mb-20"
                    variants={itemVariants}
                >
                    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Mission</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-gray-700 text-lg mb-6">
                                    At HireMe AI, we believe that landing your dream job should be easier, smarter, and stress-free. That's why we've built an AI-powered career acceleration platform that takes the guesswork out of resume building, ensures ATS compatibility, and prepares you for job interviews with cutting-edge AI-driven simulations.
                                </p>
                                <p className="text-gray-700 text-lg mb-6">
                                    Our journey started with a simple idea: job seekers deserve a smarter way to showcase their skills and stand out in the competitive job market. Traditional resumes often get lost in Applicant Tracking Systems (ATS), and many candidates struggle with effective self-presentation. We saw the need for an intelligent, data-driven approach—and HireMe AI was born.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <div className="bg-blue-50 rounded-lg p-4 flex-1 min-w-[200px]">
                                        <h3 className="text-blue-700 font-semibold text-xl mb-2">Our Vision</h3>
                                        <p className="text-gray-600">To bridge the gap between talent and opportunity by making job applications seamless, effective, and personalized.</p>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4 flex-1 min-w-[200px]">
                                        <h3 className="text-blue-700 font-semibold text-xl mb-2">Our Values</h3>
                                        <p className="text-gray-600">Innovation, accessibility, and empowerment guide everything we do as we help job seekers worldwide.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <motion.div
                                    className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white relative z-10"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <h3 className="text-2xl font-bold mb-4">Why We're Different</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="mr-2 text-xl">✓</span>
                                            <span>100% ATS-Friendly Resumes</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-xl">✓</span>
                                            <span>AI-Powered Job Matching</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-xl">✓</span>
                                            <span>One-Click Resume & Cover Letter Generation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-xl">✓</span>
                                            <span>AI-Driven Interview Preparation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-xl">✓</span>
                                            <span>Personalized Career Insights</span>
                                        </li>
                                    </ul>
                                </motion.div>
                                <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="story"
                    className="mb-20"
                    variants={itemVariants}
                >
                    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Journey</h2>
                        <p className="text-gray-700 text-lg mb-8">
                            Since our founding, we've been on a mission to transform how people approach their job search. Here's how our story has unfolded:
                        </p>
                        <div className="relative">
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 rounded-full"></div>
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <motion.div
                                        key={milestone.year}
                                        className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex-1 p-4 md:p-8">
                                            <Typography variant="h6" className="text-blue-600 font-semibold mb-2">
                                                {milestone.year}
                                            </Typography>
                                            <Typography variant="h5" className="text-gray-800 mb-3">
                                                {milestone.title}
                                            </Typography>
                                            <Typography variant="body1" className="text-gray-600">
                                                {milestone.description}
                                            </Typography>
                                        </div>
                                        <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 mt-4 md:mt-0">
                                            <Avatar className="bg-blue-500 w-12 h-12 md:w-16 md:h-16 text-white text-2xl">
                                                {milestone.year.slice(-2)}
                                            </Avatar>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="team"
                    className="mb-20"
                    variants={itemVariants}
                >
                    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Team</h2>
                        <Grid container spacing={4}>
                            {teamMembers.map((member) => (
                                <Grid item xs={12} sm={6} md={3} key={member.name}>
                                    <motion.div
                                        className="text-center p-4"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Avatar
                                            alt={member.name}
                                            src={member.avatar}
                                            className="w-24 h-24 mx-auto mb-4"
                                            sx={{ bgcolor: 'primary.main' }}
                                        >
                                            {member.avatar}
                                        </Avatar>
                                        <Typography variant="h6" className="text-blue-600 font-semibold">
                                            {member.name}
                                        </Typography>
                                        <Typography variant="subtitle1" className="text-gray-600">
                                            {member.role}
                                        </Typography>
                                        <Typography variant="body2" className="mt-2 text-gray-700">
                                            {member.bio}
                                        </Typography>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </motion.section>

                <motion.section
                    id="technology"
                    className="mb-20"
                    variants={itemVariants}
                >
                    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Technology</h2>
                        <Grid container spacing={6}>
                            {features.map((feature, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <motion.div
                                        className="p-4 rounded-lg hover:bg-blue-50 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="text-4xl mb-4 text-blue-600">{feature.icon}</div>
                                        <Typography variant="h6" className="text-blue-700 font-semibold mb-2">
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body1" className="text-gray-700">
                                            {feature.description}
                                        </Typography>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </motion.section>
            </motion.div>

            {showBackToTop && (
                <motion.button
                    className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg"
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    ↑
                </motion.button>
            )}
        </div>
    );
}

export default Aboutus;