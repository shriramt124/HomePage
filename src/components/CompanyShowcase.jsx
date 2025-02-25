import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ShowcaseContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '4rem 0',
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
}));

const CompanyLogo = styled('img')({
  width: '100%',
  maxWidth: '160px',
  height: 'auto',
  filter: 'grayscale(100%) opacity(50%)',
  transition: 'all 0.4s ease-in-out',
  padding: '0 20px',
  '&:hover': {
    filter: 'grayscale(0%) opacity(100%)',
    transform: 'scale(1.05)',
  },
});

const CompanyShowcase = () => {
  const companies = [
    { name: 'Samsung', logo: 'https://imgs.search.brave.com/1eAMTyjwKCra36JbmGY0C3VO3o9l_gay6PEcD_ankuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMzAxNjI2MDEv/MTE2Mi03Njh4NTkx/LnBuZw' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png' },
    { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png' },
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <ShowcaseContainer>
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: '#333333',
            mb: 6,
            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
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
          Trusted by Industry Leaders
        </Typography>
        <Slider {...settings}>
          {companies.map((company) => (
            <CompanyLogo
              key={company.name}
              src={company.logo}
              alt={`${company.name} logo`}
              onError={(e) => {
                e.target.src = '/path/to/fallback/image.png';
              }}
            />
          ))}
        </Slider>
      </Container>
    </ShowcaseContainer>
  );
};

export default CompanyShowcase;