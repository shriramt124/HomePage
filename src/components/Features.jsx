import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Description, LinkedIn, Assignment, Speed, Work, Edit } from '@mui/icons-material';

const FeatureCard = styled(Card)({
  height: '100%',
  backgroundColor: '#ffffff',
  color: '#333333',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(33, 150, 243, 0.15)',
  },
});

const IconWrapper = styled(Box)({
  background: 'linear-gradient(45deg, #2196F3, #1976D2)',
  borderRadius: '12px',
  padding: '1.2rem',
  display: 'inline-flex',
  marginBottom: '1.5rem',
  boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
  '& svg': {
    fontSize: '2rem',
    color: '#ffffff',
  },
});

const features = [
  {
    title: 'LinkedIn Import',
    description: 'Import your professional profile directly from LinkedIn with one click',
    icon: <LinkedIn />,
  },
  {
    title: 'AI Cover Letter',
    description: 'Generate personalized cover letters tailored to each job application',
    icon: <Description />,
  },
  {
    title: 'Smart Suggestions',
    description: 'Get AI-powered recommendations to enhance your resume content',
    icon: <Edit />,
  },
  {
    title: 'ATS Optimization',
    description: 'Ensure your resume passes Applicant Tracking Systems with our optimization tools',
    icon: <Speed />,
  },
  {
    title: 'Job Matching',
    description: 'Discover relevant job opportunities based on your resume and skills',
    icon: <Work />,
  },
  {
    title: 'Custom Templates',
    description: 'Create targeted resumes based on specific job descriptions',
    icon: <Assignment />,
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#ffffff' }}>
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
          sx={{ color: '#666666', mb: 8, maxWidth: '800px', mx: 'auto' }}
        >
          Our AI-powered platform provides everything you need to create the perfect resume
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <IconWrapper>
                    {feature.icon}
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666666' }}>
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