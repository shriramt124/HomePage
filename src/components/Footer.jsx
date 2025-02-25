import { Box, Container, Grid, Typography, IconButton, Link, Divider, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Facebook, Twitter, LinkedIn, Instagram, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const FooterContainer = styled(Box)({
  backgroundColor: '#f8f9fa',
  paddingTop: '4rem',
  paddingBottom: '2rem',
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
});

const FooterLink = styled(Link)({
  color: '#666666',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#2196F3',
  },
});

const SocialButton = styled(IconButton)({
  margin: '0 8px',
  color: '#666666',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#2196F3',
    transform: 'translateY(-3px)',
  },
});

const FooterSection = styled(motion.div)({
  marginBottom: '2rem',
});

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Templates', 'Pricing', 'Examples'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Help Center', 'Career Tips', 'Resume Guide'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Contact', 'Privacy Policy'],
    },
  ];

  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FooterSection
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #2196F3, #1976D2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                AI Resume Maker
              </Typography>
              <Typography variant="body2" sx={{ color: '#666666', mb: 2, maxWidth: '300px' }}>
                Transform your career with our AI-powered resume builder. Create professional resumes that stand out and get you noticed.
              </Typography>
              <Box sx={{ mb: 3 }}>
                <SocialButton component="a" href="#" target="_blank">
                  <Facebook />
                </SocialButton>
                <SocialButton component="a" href="#" target="_blank">
                  <Twitter />
                </SocialButton>
                <SocialButton component="a" href="#" target="_blank">
                  <LinkedIn />
                </SocialButton>
                <SocialButton component="a" href="#" target="_blank">
                  <Instagram />
                </SocialButton>
                <SocialButton component="a" href="#" target="_blank">
                  <GitHub />
                </SocialButton>
              </Box>
            </FooterSection>
          </Grid>

          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <FooterSection
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                  {section.title}
                </Typography>
                {section.links.map((link) => (
                  <Typography key={link} variant="body2" sx={{ mb: 1 }}>
                    <FooterLink href="#">{link}</FooterLink>
                  </Typography>
                ))}
              </FooterSection>
            </Grid>
          ))}

          <Grid item xs={12} md={2}>
            <FooterSection
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Stay Updated
              </Typography>
              <Typography variant="body2" sx={{ color: '#666666', mb: 2 }}>
                Subscribe to our newsletter for the latest resume tips and career advice.
              </Typography>
              <Box component="form" noValidate>
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#ffffff',
                      '& fieldset': {
                        borderColor: 'rgba(33, 150, 243, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#2196F3',
                      },
                    },
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #2196F3, #1976D2)',
                    color: '#ffffff',
                    py: 1,
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976D2, #1565C0)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </FooterSection>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="body2" sx={{ color: '#666666' }}>
            © {new Date().getFullYear()} AI Resume Maker. All rights reserved.
          </Typography>
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <FooterLink href="#" sx={{ mr: 3 }}>
              Terms of Service
            </FooterLink>
            <FooterLink href="#">
              Privacy Policy
            </FooterLink>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;