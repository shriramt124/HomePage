import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Description, Edit, Speed, Work, CheckCircle } from '@mui/icons-material';

const RoadmapContainer = styled(Box)({
  backgroundColor: '#f8f9fa',
  padding: '6rem 0',
  position: 'relative',
  overflow: 'hidden',
});

const GlowingOrb = styled(motion.div)({
  position: 'absolute',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: 'radial-gradient(circle at center, rgba(33, 150, 243, 0.15), transparent 70%)',
  filter: 'blur(40px)',
});

const StyledTimelineItem = styled(TimelineItem)({
  '&::before': {
    display: 'none',
  },
});

const StyledPaper = styled(Paper)({
  padding: '24px',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const roadmapSteps = [
  {
    title: 'Import Your Profile',
    description: 'Start by importing your LinkedIn profile or uploading your existing resume to kickstart the process.',
    icon: <Description />,
  },
  {
    title: 'AI-Powered Enhancement',
    description: 'Our AI analyzes your content and suggests improvements to make your resume stand out.',
    icon: <Edit />,
  },
  {
    title: 'ATS Optimization',
    description: 'Ensure your resume passes through Applicant Tracking Systems with our smart keyword optimization.',
    icon: <Speed />,
  },
  {
    title: 'Job Matching',
    description: 'Get matched with relevant job opportunities based on your enhanced resume.',
    icon: <Work />,
  },
  {
    title: 'Ready to Apply',
    description: 'Download your polished resume and start applying to your dream jobs with confidence.',
    icon: <CheckCircle />,
  },
];

const Roadmap = () => {
  return (
    <RoadmapContainer>
      <GlowingOrb
        animate={{
          x: ['-25%', '125%'],
          y: ['-25%', '125%'],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          },
          y: {
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
        style={{
          top: '-150px',
          left: '-150px',
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
          }}
        >
          Your Journey to Success
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ color: '#666666', mb: 8, maxWidth: '800px', mx: 'auto' }}
        >
          Follow our proven roadmap to create a professional resume that gets you noticed
        </Typography>

        <Timeline position="alternate">
          {roadmapSteps.map((step, index) => (
            <StyledTimelineItem key={index}>
              <TimelineSeparator>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <TimelineDot sx={{ bgcolor: 'primary.main' }}>
                    {step.icon}
                  </TimelineDot>
                </motion.div>
                {index < roadmapSteps.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                >
                  <StyledPaper elevation={3}>
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {step.description}
                    </Typography>
                  </StyledPaper>
                </motion.div>
              </TimelineContent>
            </StyledTimelineItem>
          ))}
        </Timeline>
      </Container>
    </RoadmapContainer>
  );
};

export default Roadmap;