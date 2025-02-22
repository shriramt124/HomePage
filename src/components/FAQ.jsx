import { useState } from 'react';
import { Box, Container, Typography, TextField, IconButton, Collapse, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ExpandMore, Search, Code, Business, School, Work, Settings, Help } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'general', icon: <Help />, label: 'General' },
  { id: 'technical', icon: <Code />, label: 'Technical' },
  { id: 'business', icon: <Business />, label: 'Business' },
  { id: 'education', icon: <School />, label: 'Education' },
  { id: 'career', icon: <Work />, label: 'Career' },
  { id: 'settings', icon: <Settings />, label: 'Settings' },
];

const faqs = [
  {
    category: 'general',
    questions: [
      {
        q: 'What is AI Resume Maker?',
        a: 'AI Resume Maker is an advanced platform that uses artificial intelligence to help you create professional, ATS-friendly resumes. It offers smart suggestions, templates, and optimization tools to make your resume stand out.'
      },
      {
        q: 'How does the AI technology work?',
        a: 'Our AI analyzes your input and compares it with millions of successful resumes to provide tailored suggestions. It helps optimize content, format, and keywords while ensuring your resume meets industry standards.'
      },
    ]
  },
  {
    category: 'technical',
    questions: [
      {
        q: 'What file formats can I export my resume to?',
        a: 'You can export your resume to PDF, DOCX, and TXT formats. PDF is recommended for maintaining consistent formatting across different devices.'
      },
      {
        q: 'Is my data secure?',
        a: 'Yes, we use industry-standard encryption and security measures to protect your data. Your information is stored securely and never shared without your permission.'
      },
    ]
  },
  {
    category: 'business',
    questions: [
      {
        q: 'What pricing plans are available?',
        a: 'We offer flexible pricing plans including a free basic plan and premium plans with advanced features. Visit our pricing page for detailed information.'
      },
      {
        q: 'Do you offer team or enterprise solutions?',
        a: 'Yes, we provide custom enterprise solutions for businesses and organizations. Contact our sales team for more information.'
      },
    ]
  },
];

const CategoryButton = styled(Paper)(({ theme, active }) => ({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  background: active ? 'linear-gradient(135deg, #2196F3, #1976D2)' : '#ffffff',
  color: active ? '#ffffff' : '#666666',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 24px rgba(33, 150, 243, 0.15)',
  },
}));

const FAQItem = styled(Paper)(({ theme }) => ({
  padding: '1rem 1.5rem',
  marginBottom: '1rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateX(8px)',
    boxShadow: '0 4px 20px rgba(33, 150, 243, 0.1)',
  },
}));

const ExpandIcon = styled(IconButton)(({ open }) => ({
  transform: open ? 'rotate(180deg)' : 'rotate(0)',
  transition: 'transform 0.3s ease',
}));

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filteredFAQs = faqs
    .find(category => category.category === activeCategory)?.questions
    .filter(faq =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f8f9fa',
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
      }}
    >
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: '#333333',
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
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
          Frequently Asked Questions
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
          Find answers to common questions about our AI-powered resume builder
        </Typography>

        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <Search sx={{ color: '#666666', mr: 1 }} />,
              sx: {
                backgroundColor: '#ffffff',
                '& fieldset': {
                  borderColor: 'rgba(33, 150, 243, 0.2)',
                },
              },
            }}
          />
        </Box>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {categories.map((category) => (
            <Grid item xs={6} sm={4} md={2} key={category.id}>
              <CategoryButton
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                component={motion.div}
                whileHover={{ y: -5 }}
                elevation={activeCategory === category.id ? 4 : 1}
              >
                {category.icon}
                <Typography variant="subtitle2">{category.label}</Typography>
              </CategoryButton>
            </Grid>
          ))}
        </Grid>

        <Box>
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQItem elevation={1}>
                <Box
                  onClick={() => setExpandedId(expandedId === index ? null : index)}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: expandedId === index ? '#2196F3' : '#333333',
                    }}
                  >
                    {faq.q}
                  </Typography>
                  <ExpandIcon
                    open={expandedId === index}
                    size="small"
                    onClick={() => setExpandedId(expandedId === index ? null : index)}
                  >
                    <ExpandMore />
                  </ExpandIcon>
                </Box>
                <Collapse in={expandedId === index}>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 2,
                      color: '#666666',
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.a}
                  </Typography>
                </Collapse>
              </FAQItem>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;