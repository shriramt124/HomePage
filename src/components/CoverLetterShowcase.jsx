import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const ShowcaseContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)',
  padding: '6rem 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.3), transparent)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundImage: 'radial-gradient(#2196F3 1px, transparent 1px), radial-gradient(#2196F3 1px, transparent 1px)',
    backgroundSize: '50px 50px',
    backgroundPosition: '0 0, 25px 25px',
    opacity: 0.03,
    animation: 'backgroundMove 20s linear infinite',
    pointerEvents: 'none',
  },
  '@keyframes backgroundMove': {
    '0%': {
      backgroundPosition: '0 0, 25px 25px',
    },
    '100%': {
      backgroundPosition: '50px 0, 75px 25px',
    },
  },
}));

const CoverLetterPreview = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  height: '600px',
  overflow: 'auto',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(33, 150, 243, 0.15)',
  border: '1px solid rgba(33, 150, 243, 0.1)',
  position: 'relative',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#2196F3',
    borderRadius: '4px',
  },
}));

const FeatureCard = styled(motion.div)(({ theme }) => ({
  padding: '1.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(33, 150, 243, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(33, 150, 243, 0.1)',
  marginBottom: '1rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(33, 150, 243, 0.2)',
  },
}));

const coverLetterSamples = [
  {
    id: 1,
    title: 'Professional Cover Letter',
    content: `Dear Hiring Manager,

I am writing to express my strong interest in the [Position] role at [Company Name], as advertised on your company website. With my track record of [relevant achievement] and expertise in [relevant skill], I am confident in my ability to contribute significantly to your team.

In my current role at [Current Company], I have successfully [specific achievement with metrics]. This experience has honed my skills in [relevant skills] and prepared me to take on new challenges in a dynamic environment like [Company Name].

What particularly draws me to [Company Name] is your commitment to [company value/achievement]. I am impressed by your recent [specific company project/initiative] and would be thrilled to contribute to similar innovative projects.

Thank you for considering my application. I look forward to discussing how my skills and experience align with your team's needs.

Best regards,
[Your Name]`,
    highlights: [
      'Professional tone with clear structure',
      'Specific achievements with metrics',
      'Company research demonstration',
      'Clear value proposition'
    ]
  },
  {
    id: 2,
    title: 'Creative Industry Cover Letter',
    content: `Dear [Hiring Manager's Name],

When I saw the [Position] opening at [Company Name], I knew it was the perfect opportunity to combine my passion for creative innovation with my professional expertise. As someone who has generated [specific creative achievement], I am excited about the possibility of bringing my unique perspective to your team.

My background in [relevant field] has taught me to think outside the box while maintaining professional standards. At [Current Company], I spearheaded [specific project] that resulted in [measurable outcome], demonstrating my ability to balance creativity with business objectives.

Your company's recent [specific campaign/project] caught my attention, and I admire how you've managed to [specific achievement]. I would love to contribute to future projects with similar impact and innovation.

I look forward to discussing how my creative approach and technical skills could benefit [Company Name].

Best regards,
[Your Name]`,
    highlights: [
      'Creative yet professional approach',
      'Balanced creativity with results',
      'Industry-specific achievements',
      'Personal brand showcase'
    ]
  }
];

const CoverLetterShowcase = () => {
  const [selectedLetter, setSelectedLetter] = useState(coverLetterSamples[0]);

  return (
    <ShowcaseContainer>
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
          Professional Cover Letter Examples
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: '#666666',
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6,
          }}
        >
          Stand out from the competition with our expertly crafted cover letter examples
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <CoverLetterPreview elevation={0}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                {selectedLetter.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: 'pre-line',
                  lineHeight: 1.8,
                  color: '#444',
                  fontFamily: '"Times New Roman", serif',
                }}
              >
                {selectedLetter.content}
              </Typography>
            </CoverLetterPreview>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'sticky', top: '2rem' }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Key Features
              </Typography>
              {selectedLetter.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FeatureCard>
                    <Typography variant="body1">{highlight}</Typography>
                  </FeatureCard>
                </motion.div>
              ))}
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.5,
                    background: 'linear-gradient(45deg, #2196F3, #1976D2)',
                    boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
                    '&:hover': {
                      boxShadow: '0 6px 16px rgba(33, 150, 243, 0.3)',
                    },
                  }}
                >
                  Use This Template
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ShowcaseContainer>
  );
};

export default CoverLetterShowcase;