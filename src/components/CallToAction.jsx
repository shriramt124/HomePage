import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const CTAContainer = styled(Box)(({ theme }) => ({
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
}));

const FloatingElement = styled(motion.div)({
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05))',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
});

const GradientText = styled(Typography)({
    background: 'linear-gradient(45deg, #2196F3, #1976D2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
    textAlign: 'center',
});

const CallToAction = () => {
    return (
        <CTAContainer>
            <FloatingElement
                style={{
                    width: '300px',
                    height: '300px',
                    top: '10%',
                    left: '-150px',
                    opacity: 0.5,
                }}
                animate={{
                    y: [0, 50, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            <FloatingElement
                style={{
                    width: '200px',
                    height: '200px',
                    bottom: '10%',
                    right: '-100px',
                    opacity: 0.3,
                }}
                animate={{
                    y: [0, -30, 0],
                    rotate: [360, 180, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <GradientText
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                mb: 3,
                            }}
                        >
                            Ready to build your AI resume?
                        </GradientText>
                        <Typography
                            variant="h5"
                            sx={{
                                color: '#666666',
                                mb: 4,
                                maxWidth: '800px',
                                mx: 'auto',
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                                lineHeight: 1.6,
                            }}
                        >
                            Join over 3 million people who use Rezi to take control of their job search.
                        </Typography>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    py: 2,
                                    px: 6,
                                    fontSize: '1.25rem',
                                    textTransform: 'none',
                                    borderRadius: '50px',
                                    background: 'linear-gradient(45deg, #2196F3, #1976D2)',
                                    boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #1976D2, #1565C0)',
                                        boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
                                    },
                                }}
                            >
                                Create your resume
                            </Button>
                        </motion.div>
                    </motion.div>
                </Box>
            </Container>
        </CTAContainer>
    );
};

export default CallToAction;