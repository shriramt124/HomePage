import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

function Aboutus() {
    const [activeSection, setActiveSection] = useState('mission');
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const FloatingElement = styled(motion.div)({
        position: 'absolute',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(33,150,243,0.1), rgba(33,150,243,0.05))',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
    });

    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            bio: 'Former HR executive with 15+ years of experience in talent acquisition. Sarah founded HireMe AI to revolutionize how job seekers approach the application process.',
            avatar: '👩💼'
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
            avatar: '👩🎓'
        },
        {
            name: 'James Wilson',
            role: 'Lead UX Designer',
            bio: 'Award-winning designer focused on creating intuitive, accessible user experiences. James is passionate about making complex tools simple to use.',
            avatar: '👨🎨'
        }
    ];

    const features = [
        {
            icon: '📄',
            title: 'AI-Powered Resume Builder',
            description: 'Craft a professional, job-winning resume in minutes'
        },
        {
            icon: '📝',
            title: 'ATS-Optimized Templates',
            description: 'Pass recruiter screening effortlessly'
        },
        {
            icon: '🤖',
            title: 'AI Interview Coach',
            description: 'Practice mock interviews with real-time feedback'
        },
        {
            icon: '💼',
            title: 'Instant Cover Letter Generator',
            description: 'Create tailored cover letters in seconds'
        },
        {
            icon: '🌍',
            title: 'AI Job & Internship Finder',
            description: 'Get personalized job recommendations worldwide'
        },
        {
            icon: '💡',
            title: 'Personalized Career Insights',
            description: 'AI-driven resume and interview tips for success'
        }
    ];

    const whatWeDoFeatures = [
        'AI-Powered Resume Builder',
        'Smart Cover Letters',
        'ATS Optimization',
        'AI Mock Interviews',
        'AI-Powered Job & Internship Finder',
        'Job-Specific Resume Suggestions',
        'Resume Performance Analysis'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 relative overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <FloatingElement
                    style={{ width: 300, height: 300, top: '10%', left: -150, opacity: 0.5 }}
                    animate={{ y: [0, 50, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                <FloatingElement
                    style={{ width: 200, height: 200, bottom: '10%', right: -100, opacity: 0.3 }}
                    animate={{ y: [0, -30, 0], rotate: [360, 180, 0] }}
                    transition={{ duration: 15, repeat: Infinity }}
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
                        animate={{ y: [0, Math.random() * 100 - 50], x: [0, Math.random() * 100 - 50] }}
                        transition={{ duration: Math.random() * 20 + 10, repeat: Infinity, repeatType: 'reverse' }}
                    />
                ))}
            </div>

            {/* Header */}
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        className="text-4xl font-extrabold text-blue-600 sm:text-5xl lg:text-6xl"
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
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={() => scrollToSection('cta')}
                        >
                            Find My Dream Job
                        </Button>
                    </motion.div>
                </div>
            </header>

            {/* Navigation Pills */}
            <div className="bg-white shadow-sm border-t border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto py-4 space-x-8 scrollbar-hide">
                        {[
                            { id: 'mission', label: 'Our Mission' },
                            { id: 'whatwedo', label: 'What We Do' },
                            { id: 'team', label: 'Our Team' },
                            { id: 'whychoose', label: 'Why Choose Us' }
                        ].map((item) => (
                            <motion.button
                                key={item.id}
                                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${activeSection === item.id ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'
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

            {/* Main Content */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
                {/* Mission Section */}
                <motion.section
                    id="mission"
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Mission</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-gray-700 text-lg mb-6">
                                    At HireMe AI, we believe that landing your dream job should be easier, smarter, and stress-free. That’s why we’ve built an AI-powered career acceleration platform that takes the guesswork out of resume building, ensures ATS compatibility, and prepares you for job interviews with cutting-edge AI-driven simulations.
                                </p>
                                <p className="text-gray-700 text-lg mb-6">
                                    Our journey started with a simple idea: job seekers deserve a smarter way to showcase their skills and stand out in the competitive job market. Traditional resumes often get lost in Applicant Tracking Systems (ATS), and many candidates struggle with effective self-presentation. We saw the need for an intelligent, data-driven approach—and HireMe AI was born.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <div className="bg-blue-50 rounded-lg p-4 flex-1 min-w-[200px]">
                                        <h3 className="text-blue-700 font-semibold text-xl mb-2">Our Vision</h3>
                                        <p className="text-gray-600">
                                            To bridge the gap between talent and opportunity by making job applications seamless, effective, and personalized.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4 flex-1 min-w-[200px]">
                                        <h3 className="text-blue-700 font-semibold text-xl mb-2">Our Values</h3>
                                        <p className="text-gray-600">
                                            Innovation, accessibility, and empowerment guide everything we do as we help job seekers worldwide.
                                        </p>
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
                                    <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
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
                                    </ul>
                                </motion.div>
                                <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-2xl -z-10" />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* What We Do Section */}
                <motion.section
                    id="whatwedo"
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">What We Do</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whatWeDoFeatures.map((feature, index) => (
                                <div key={index} className="p-4 rounded-lg hover:bg-blue-50 transition-colors">
                                    <Typography variant="h6" className="text-blue-700 font-semibold mb-2">
                                        {feature}
                                    </Typography>
                                    <Typography variant="body1" className="text-gray-700">
                                        {[
                                            'Instantly create professional, ATS-friendly resumes optimized for success',
                                            'Let AI craft compelling cover letters tailored to each job application',
                                            'Ensure your resume passes recruiter screening systems',
                                            'Practice with AI-driven interview simulations and real-time feedback',
                                            'AI scans global job boards for personalized opportunities',
                                            'Get personalized resume recommendations for different industries/roles',
                                            'Use AI insights to refine your resume and maximize hiring chances'
                                        ][index]}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Team Section */}
                <motion.section
                    id="team"
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
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

                {/* CTA Section */}
                <motion.section
                    id="cta"
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center">
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">Your Career, Simplified</h2>
                        <p className="text-gray-700 text-lg mb-8">
                            Struggling to create the perfect resume? Getting rejected by ATS?<br />
                            Unprepared for interviews? Finding it hard to search for the right job?<br />
                            <span className="text-blue-600 font-semibold">HireMe AI has you covered</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                className="w-full sm:w-auto"
                                onClick={() => scrollToSection('mission')}
                            >
                                Create Resume
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                className="w-full sm:w-auto"
                                onClick={() => scrollToSection('whatwedo')}
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </motion.section>
            </motion.div>

            {/* Back to Top Button */}
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