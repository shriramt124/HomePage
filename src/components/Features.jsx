import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Description, LinkedIn, Assignment, Speed, Work, Edit } from '@mui/icons-material';

// Styled components
const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: '#ffffff',
  color: '#333333',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(33, 150, 243, 0.1)',
  borderRadius: '16px',
  overflow: 'hidden',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px rgba(33, 150, 243, 0.2)',
    '& .icon-wrapper': {
      transform: 'scale(1.1)',
      background: 'linear-gradient(135deg, #2196F3, #1976D2)',
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196F3, #1976D2)',
  borderRadius: '16px',
  padding: '1.5rem',
  display: 'inline-flex',
  marginBottom: '2rem',
  boxShadow: '0 8px 24px rgba(33, 150, 243, 0.25)',
  transition: 'all 0.3s ease-in-out',
  '& svg': {
    fontSize: '2.5rem',
    color: '#ffffff',
  },
}));

// Features data
const features = [
  {
    title: 'LinkedIn Import',
    description: 'Import your professional profile directly from LinkedIn with one click',
    icon: <LinkedIn aria-label="LinkedIn Import" />,
  },
  {
    title: 'AI Cover Letter',
    description: 'Generate personalized cover letters tailored to each job application',
    icon: <Description aria-label="AI Cover Letter" />,
  },
  {
    title: 'Smart Suggestions',
    description: 'Get AI-powered recommendations to enhance your resume content',
    icon: <Edit aria-label="Smart Suggestions" />,
  },
  {
    title: 'ATS Optimization',
    description: 'Ensure your resume passes Applicant Tracking Systems with our optimization tools',
    icon: <Speed aria-label="ATS Optimization" />,
  },
  {
    title: 'Job Matching',
    description: 'Discover relevant job opportunities based on your resume and skills',
    icon: <Work aria-label="Job Matching" />,
  },
  {
    title: 'Custom Templates',
    description: 'Create targeted resumes based on specific job descriptions',
    icon: <Assignment aria-label="Custom Templates" />,
  },
];

// Component
const Features = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: '#f8f9fa', position: 'relative', overflow: 'hidden' }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: '#333333',
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
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
          Powerful Features for Your Success
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: '#666666',
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
          }}
        >
          Our AI-powered platform provides everything you need to create the perfect resume
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}> {/* Use title as key */}
              <FeatureCard>
                <CardContent sx={{ textAlign: 'center', p: 4, position: 'relative', zIndex: 1 }}>
                  <IconWrapper className="icon-wrapper">
                    {feature.icon}
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      fontSize: { xs: '1.25rem', md: '1.5rem' }, // Responsive font size
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666666',
                      fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive font size
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;