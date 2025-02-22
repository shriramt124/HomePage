import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { ParallaxBanner, useParallax } from 'react-scroll-parallax';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroButton = styled(Button)({
  padding: '12px 24px',
  fontSize: '1.1rem',
  marginTop: '2rem',
  textTransform: 'none',
  background: 'linear-gradient(45deg, #2196F3, #1976D2)',
  '&:hover': {
    background: 'linear-gradient(45deg, #1976D2, #1565C0)',
  },
});

const FloatingElement = styled(motion.div)({
  position: 'absolute',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05))',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
});

const InteractiveBox = styled(motion.div)({
  position: 'absolute',
  right: '5%',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '45%',
  height: '70%',
  perspective: '1000px',
  '& .card': {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
});

const Hero = () => {
  const { ref } = useParallax({ speed: -10 });
  const boxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!boxRef.current) return;
      const rect = boxRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 20;
      const rotateY = (rect.width / 2 - x) / 20;
      boxRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (!boxRef.current) return;
      boxRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    const card = boxRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(33, 150, 243, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
          zIndex: 0,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <FloatingElement
          animate={{
            y: [0, 20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          sx={{
            width: '150px',
            height: '150px',
            left: '-5%',
            top: '20%',
          }}
        />
        <FloatingElement
          animate={{
            y: [0, -30, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          sx={{
            width: '100px',
            height: '100px',
            left: '10%',
            bottom: '10%',
          }}
        />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} ref={ref}>
            <Typography
              variant="h1"
              sx={{
                color: '#333333',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              Transform Your Career with AI-Powered Resumes
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#666666',
                marginBottom: '2rem',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                lineHeight: 1.6,
              }}
            >
              Create professional resumes instantly with our AI technology. Import your LinkedIn profile, get smart suggestions, and optimize for ATS systems.
            </Typography>
            <HeroButton
              variant="contained"
              size="large"
            >
              Start Building Now
            </HeroButton>
          </Grid>
        </Grid>
      </Container>
      <InteractiveBox>
        <motion.div
          className="card"
          ref={boxRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.2) 0%, rgba(33, 150, 243, 0.1) 100%)',
              zIndex: 1,
            }}
          />
        </motion.div>
      </InteractiveBox>
    </Box>
  );
};

export default Hero;