import { Box, Container, Typography, Grid, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled, keyframes } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../assets/r3.jpg";
import img2 from "../assets/r4.jpg";
import img3 from "../assets/r5.png";

// Enhanced background with subtle pattern
const CategoriesContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
  padding: '7rem 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.4), transparent)',
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
    pointerEvents: 'none',
  }
}));

// More distinctive category buttons with animation
const CategoryButton = styled(motion(Button))(({ active, theme }) => ({
  margin: '0.5rem',
  padding: '0.75rem 1.5rem',
  borderRadius: '30px',
  backgroundColor: active ? '#2196F3' : 'rgba(255, 255, 255, 0.8)',
  color: active ? '#ffffff' : '#555555',
  border: active ? 'none' : '1px solid rgba(33, 150, 243, 0.4)',
  boxShadow: active ? '0 4px 15px rgba(33, 150, 243, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: active ? '#1976D2' : 'rgba(33, 150, 243, 0.1)',
    transform: 'translateY(-3px)',
    boxShadow: active ? '0 6px 18px rgba(33, 150, 243, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  transition: 'all 0.3s ease',
  textTransform: 'none',
  fontSize: '0.95rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0.6rem 1.2rem',
    fontSize: '0.85rem',
  },
}));

// More visually appealing card design
const ResumeCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 30px rgba(33, 150, 243, 0.15)',
  },
  position: 'relative',
}));

const CardImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '320px',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#f5f5f5',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.03)',
  },
}));

const CardContent = styled(Box)(({ theme }) => ({
  padding: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
}));

const ViewButton = styled(Button)(({ theme }) => ({
  marginTop: '1rem',
  padding: '0.5rem 1.2rem',
  borderRadius: '30px',
  background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
  color: '#ffffff',
  fontWeight: 500,
  boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
  '&:hover': {
    background: 'linear-gradient(90deg, #1976D2, #2196F3)',
    boxShadow: '0 6px 18px rgba(33, 150, 243, 0.4)',
  },
  textTransform: 'none',
  alignSelf: 'flex-start',
}));

// Enhanced fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Improved pulse animation for titles
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  marginBottom: '1rem',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    backgroundColor: '#2196F3',
    borderRadius: '2px',
  },
}));

const SlideItem = styled(Box)(({ theme }) => ({
  padding: '15px',
  transform: 'scale(0.92)',
  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  animation: `${fadeIn} 0.6s ease-out`,
  '&.slick-center': {
    transform: 'scale(1)',
  },
  '&:hover': {
    transform: 'scale(0.95)',
  },
}));

// Updated nav buttons with better transitions
const NavButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '54px',
  height: '54px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '50%',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  zIndex: 2,
  '&:hover': {
    background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
    color: '#ffffff',
    boxShadow: '0 8px 25px rgba(33, 150, 243, 0.3)',
    transform: 'translateY(-50%) scale(1.1)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px',
  },
}));

const PrevButton = styled(NavButton)({
  left: '10px',
});

const NextButton = styled(NavButton)({
  right: '10px',
});

// Category badge for cards
const CategoryBadge = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  padding: '0.25rem 0.75rem',
  borderRadius: '4px',
  backgroundColor: 'rgba(33, 150, 243, 0.1)',
  color: theme.palette.primary.main,
  fontSize: '0.75rem',
  fontWeight: 500,
  textTransform: 'capitalize',
}));

const categories = [
  { id: 'all', label: 'All Examples' },
  { id: 'student', label: 'Student' },
  { id: 'legal', label: 'Legal' },
  { id: 'doctor', label: 'Doctor' },
  { id: 'internship', label: 'Internship' },
  { id: 'architect', label: 'Architect' },
  { id: 'civil-engineer', label: 'Civil Engineer' },
  { id: 'driver', label: 'Driver' },
  { id: 'teacher', label: 'Teacher' },
  { id: 'accountant', label: 'Accountant' },
  { id: 'retail', label: 'Retail' },
  { id: 'human-resources', label: 'Human Resources' },
  { id: 'administrative', label: 'Administrative' },
];

const resumeItems = [
  {
    id: 1,
    title: 'Student Resume Example',
    category: 'student',
    description: 'Sample resume for students and recent graduates showcasing academic achievements',
    image: img1,
  },
  {
    id: 2,
    title: 'Legal Professional Example',
    category: 'legal',
    description: 'Example resume for legal professionals highlighting case experience',
    image: img2,
  },
  {
    id: 3,
    title: 'Medical Doctor Example',
    category: 'doctor',
    description: 'Sample medical resume emphasizing clinical experience',
    image: img3,
  },
  {
    id: 4,
    title: 'Internship Example',
    category: 'internship',
    description: 'Example internship resume focusing on transferable skills',
    image: img2,
  },
  {
    id: 5,
    title: 'Architect Example',
    category: 'architect',
    description: 'Sample portfolio-style resume for architects',
    image: img3,
  },
  {
    id: 6,
    title: 'Civil Engineer Example',
    category: 'civil-engineer',
    description: 'Example engineering resume with technical certifications',
    image: img2,
  },
  {
    id: 7,
    title: 'Professional Driver Example',
    category: 'driver',
    description: 'Sample resume highlighting driving experience and safety record',
    image: img3,
  },
  {
    id: 8,
    title: 'Teacher Resume Example',
    category: 'teacher',
    description: 'Example education-focused resume for teachers',
    image: img2,
  },
  {
    id: 9,
    title: 'Accountant Example',
    category: 'accountant',
    description: 'Sample accounting resume with software proficiency',
    image: img1,
  },
  {
    id: 10,
    title: 'Retail Professional Example',
    category: 'retail',
    description: 'Example retail resume emphasizing customer service',
    image: img2,
  },
  {
    id: 11,
    title: 'HR Professional Example',
    category: 'human-resources',
    description: 'Sample HR resume with recruitment experience',
    image: img1,
  },
  {
    id: 12,
    title: 'Administrative Example',
    category: 'administrative',
    description: 'Example administrative resume showcasing organizational skills',
    image: img3,
  },
];

const Categories = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const filteredResumes = activeCategory === 'all'
    ? resumeItems
    : resumeItems.filter(item => item.category === activeCategory);

  const handleCategoryChange = (categoryId) => {
    setIsLoading(true);
    setActiveCategory(categoryId);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  // Get readable category name for the badge
  const getCategoryLabel = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.label : categoryId;
  };

  return (
    <CategoriesContainer>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196F3, #1976D2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Browse Professional Resume Samples
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#666666',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Learn what matters most in your industry & create a job-winning resume.
          </Typography>
        </Box>

        <Grid container justifyContent="center" spacing={2} sx={{ mb: 6 }}>
          {categories.map((category) => (
            <Grid item key={category.id}>
              <CategoryButton
                active={activeCategory === category.id}
                onClick={() => handleCategoryChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {category.label}
              </CategoryButton>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {filteredResumes.map((resume) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={resume.id}>
              <ResumeCard
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <CardImage>
                  <img src={resume.image} alt={resume.title} />
                </CardImage>
                <CardContent>
                  <CategoryBadge>{getCategoryLabel(resume.category)}</CategoryBadge>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                    {resume.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                    {resume.description}
                  </Typography>
                </CardContent>
              </ResumeCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </CategoriesContainer>
  );

};

export default Categories;