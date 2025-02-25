import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import editorImage from '../assets/resume_editor_interface.jpeg';
import editorImage1 from '../assets/r6.png';
const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  paddingTop: theme.spacing(8),
}));

const FloatingElement = styled(motion.div)({
  position: 'absolute',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05))',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
});

const EditorPreview = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  borderRadius: '16px',
  background: '#ffffff',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #2196F3, #1976D2)',
  },
}));

const StatsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StatItem = styled(Box)({
  textAlign: 'center',
});

const Hero = () => {
  return (
    <HeroContainer>
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
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #2196F3, #1976D2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Create Your Perfect Resume with AI
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: '#666666',
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                Transform your career with our AI-powered resume builder. Get professionally crafted resumes tailored to your industry in minutes.
              </Typography>

              <StatsBox>
                <StatItem>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: '#2196F3',
                      mb: 1,
                    }}
                  >
                    90%
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Success Rate
                  </Typography>
                </StatItem>
                <StatItem>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: '#2196F3',
                      mb: 1,
                    }}
                  >
                    2M+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Users
                  </Typography>
                </StatItem>
                <StatItem>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: '#2196F3',
                      mb: 1,
                    }}
                  >
                    24/7
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Support
                  </Typography>
                </StatItem>
              </StatsBox>

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
                Get Started Free
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <EditorPreview elevation={3}>
                <Box
                  component="img"
                  src={editorImage1}
                  alt="Resume Editor Interface"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    transform: 'scale(1.02)',
                  }}
                />
              </EditorPreview>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default Hero;