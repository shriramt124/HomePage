import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider, createTheme } from '@mui/material';
 
import Hero from '../components/Hero';
import Features from '../components/Features';
import ResumeCarousel from '../components/ResumeCarousel';
import Roadmap from '../components/Roadmap';
 
import Reviews from '../components/Reviews';
// FAQ is already handled by router in App.jsx
import Statistics from '../components/Statistics';
import React from 'react';
import CallToAction from '../components/CallToAction';
 
import CompanyShowcase from '../components/CompanyShowcase';
import Categories from '../components/Categories';
import FAQ from '../components/FAQ';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2196F3',
            light: '#64B5F6',
            dark: '#1976D2'
        },
        secondary: {
            main: '#FF4081',
            light: '#FF80AB',
            dark: '#F50057'
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5'
        },
        text: {
            primary: '#333333',
            secondary: '#666666'
        }
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 600
        },
        h2: {
            fontWeight: 600
        },
        h5: {
            fontWeight: 500
        },
        button: {
            textTransform: 'none',
            fontWeight: 500
        }
    },
    shape: {
        borderRadius: 8
    }
});

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <ParallaxProvider>
                <Hero />
                <CompanyShowcase />
                <Statistics />
                <Features />
                <ResumeCarousel />
                <Categories />
                <Roadmap />
                <Reviews />
                <CallToAction />
                {/* FAQ is handled by router */}
                <FAQ />
            </ParallaxProvider>
        </ThemeProvider>
    );
}

export default Home;
