import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';

const StatsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '6rem 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.2), transparent)',
  },
}));

const FloatingElement = styled(motion.div)({
  position: 'absolute',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05))',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
});

const StatCard = styled(motion.div)(({ theme }) => ({
  padding: '2rem',
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(33, 150, 243, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(33, 150, 243, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 48px rgba(33, 150, 243, 0.15)',
  },
}));

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StatsContainer id="stats-section">
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
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2196F3, #1976D2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(45deg, #2196F3, #1976D2)',
              margin: '1rem auto',
              borderRadius: '2px',
            },
          }}
        >
          Join over {isVisible ? (
            <CountUp
              start={0}
              end={45734000}
              separator=","
              duration={2.5}
              useEasing={true}
            />
          ) : '0'} users worldwide
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: '#666666',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6,
          }}
        >
          Start for free — try our resume builder now
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              textTransform: 'none',
              borderRadius: '8px',
              background: 'linear-gradient(45deg, #2196F3, #1976D2)',
              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
              '&:hover': {
                boxShadow: '0 6px 16px rgba(33, 150, 243, 0.3)',
              },
            }}
          >
            Create my resume
          </Button>
        </Box>
      </Container>
    </StatsContainer>
  );
};

export default Statistics;