import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Description, Edit, Speed, Work, CheckCircle } from '@mui/icons-material';

const RoadmapContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)',
  padding: '6rem 0',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '4rem 0',
  },
}));

const GlowingOrb = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  width: { xs: '200px', md: '300px' },
  height: { xs: '200px', md: '300px' },
  borderRadius: '50%',
  background: 'radial-gradient(circle at center, rgba(33, 150, 243, 0.15), transparent 70%)',
  filter: 'blur(40px)',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledTimelineItem = styled(TimelineItem)({
  '&::before': {
    display: 'none',
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '24px',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(33, 150, 243, 0.1)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(33, 150, 243, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 48px rgba(33, 150, 243, 0.2)',
    '&::before': {
      transform: 'translateX(100%)',
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(120deg, transparent 0%, transparent 25%, rgba(33, 150, 243, 0.1) 50%, transparent 75%, transparent 100%)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s ease-in-out',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));

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