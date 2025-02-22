import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '6rem 0',
  position: 'relative',
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

const SlideItem = styled(Box)({
  padding: '0 15px',
  transform: 'scale(0.9)',
  transition: 'transform 0.3s ease-in-out',
  '&.slick-center': {
    transform: 'scale(1)',
  },
});

const ResumePreview = styled(Box)({
  backgroundColor: '#ffffff',
  height: '600px',
  borderRadius: '16px',
  boxShadow: '0 8px 30px rgba(33, 150, 243, 0.15)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid rgba(33, 150, 243, 0.1)',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 12px 40px rgba(33, 150, 243, 0.2)',
    '& .overlay': {
      opacity: 1,
    },
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  },
});

const ResumeOverlay = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '2rem',
  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
  color: '#ffffff',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  textAlign: 'center',
});

const sampleResumes = [
  {
    id: 1,
    name: 'Professional Template',
    description: 'Clean and modern design perfect for corporate roles',
    image: 'https://d.novoresume.com/images/doc/functional-resume-template.png',
  },
  {
    id: 2,
    name: 'Creative Template',
    description: 'Stand out with a unique and artistic layout',
    image: 'https://d.novoresume.com/images/doc/creative-resume-template.png',
  },
  {
    id: 3,
    name: 'Modern Template',
    description: 'Contemporary design with a perfect balance of style and professionalism',
    image: 'https://d.novoresume.com/images/doc/modern-resume-template.png',
  },
  {
    id: 4,
    name: 'Executive Template',
    description: 'Sophisticated layout for senior-level professionals',
    image: 'https://d.novoresume.com/images/doc/professional-resume-template.png',
  },
];

const ResumeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '0',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Container maxWidth="xl">
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
              width: '80px',
              height: '4px',
              background: 'linear-gradient(45deg, #2196F3, #1976D2)',
              margin: '1.5rem auto',
              borderRadius: '2px',
            },
          }}
        >
          Professional Resume Templates
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
          Choose from our collection of modern, ATS-friendly templates designed to impress recruiters
        </Typography>
        <Slider {...settings}>
          {sampleResumes.map((resume) => (
            <SlideItem key={resume.id}>
              <ResumePreview>
                <img src={resume.image} alt={resume.name} />
                <ResumeOverlay className="overlay">
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {resume.name}
                  </Typography>
                  <Typography variant="body2">
                    {resume.description}
                  </Typography>
                </ResumeOverlay>
              </ResumePreview>
            </SlideItem>
          ))}        
        </Slider>
      </Container>
    </CarouselContainer>
  );
};

export default ResumeCarousel;