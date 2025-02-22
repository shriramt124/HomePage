import { Box, Container, Typography, Grid, Avatar, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const ReviewCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: '2rem',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid rgba(33, 150, 243, 0.1)',
  boxShadow: '0 8px 32px rgba(33, 150, 243, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 48px rgba(33, 150, 243, 0.15)',
  },
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

const reviews = [
  {
    id: 1,
    name: 'Alex Lefebvre',
    rating: 5,
    review: 'Hands down the best and most intuitive resume builder I\'ve used.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Michael Mendoza',
    rating: 5,
    review: 'I transformed my wife\'s boring resume into a professional and interesting resume using one of the templates. She was fired within a week at the first job she applied for. The resume isn\'t why she was hired, but it did get her through the door quickly.',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Terence Smith',
    rating: 4,
    review: 'Very visually-stunning templates and modules that can be added. I spent a few hours working on converting my old 1998-style CV to a 2-page Enhancv, and very pleased with the outcome. Some nice visual options and styles that can get the right message across.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Jennie',
    rating: 5,
    review: 'Great resume tool: easy to use, user friendly, has a lot of templates, allows to make adjustments, move sections/blocks, very convenient. Excellent and responsive service. Will take it again for sure.',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 5,
    name: 'Christopher D.',
    rating: 5,
    review: 'The Enhancv resume tool was a game-changer for me. It helped my resume stand out from the bunch. I definitely will be recommending others in their job search to their website.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 6,
    name: 'Brett Wilson',
    rating: 5,
    review: 'I used Enhancv service to create a resume that get recruiters attention. One of the areas that stood out was the ability to customize my resume to the position I was after. I would use your service again and tell anyone looking to create a resume to use your service. Thank you!',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
];

const Reviews = () => {
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
          What Our Users Say
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: '#666666',
            mb: { xs: 4, md: 8 },
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6,
          }}
        >
          Join thousands of satisfied users who have transformed their careers with our AI-powered resume builder
        </Typography>

        <Grid container spacing={3}>
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} key={review.id}>
              <ReviewCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{
                      width: 56,
                      height: 56,
                      mr: 2,
                      border: '2px solid #2196F3',
                    }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {review.name}
                    </Typography>
                    <Rating value={review.rating} readOnly size="small" />
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666666',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  {review.review}
                </Typography>
              </ReviewCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;