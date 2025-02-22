import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ResumeCarousel from './components/ResumeCarousel';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import BulletPointDemo from './components/BulletPointDemo';
import CoverLetterDemo from './components/CoverLetterDemo';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Navbar />
        <Hero />
        <Roadmap />
        <Features />
        <BulletPointDemo />
        <CoverLetterDemo />
        <ResumeCarousel />
        <Reviews />
        <FAQ />
        <Footer />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
