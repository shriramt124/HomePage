import { Box, Container, Typography, Paper, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Description, Edit } from '@mui/icons-material';

const DemoContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffffff',
    padding: '6rem 0',
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
        zIndex: 1,
    },
    '& > .MuiContainer-root': {
        position: 'relative',
        zIndex: 2,
    },
}));

const PreviewCard = styled(Paper)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '2rem',
    height: '100%',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(33, 150, 243, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 48px rgba(33, 150, 243, 0.15)',
    },
}));

const FloatingElement = styled(motion.div)({
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05))',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 0,
});

const sampleCoverLetter = `Dear Hiring Manager,

I am writing to express my strong interest in the Senior Software Engineer position at TechCorp. With over 8 years of experience in full-stack development and a track record of leading successful projects, I am confident in my ability to contribute to your team's success.

In my current role at InnovateSoft, I have:
• Led the development of a microservices architecture that improved system scalability by 200%
• Mentored junior developers and implemented best practices that reduced bug reports by 40%
• Collaborated with cross-functional teams to deliver projects 15% ahead of schedule

I am particularly excited about TechCorp's mission to revolutionize cloud computing solutions. Your commitment to innovation and technical excellence aligns perfectly with my professional goals and expertise.

Thank you for considering my application. I look forward to discussing how my skills and experience can benefit TechCorp.

Best regards,
Alex Thompson`;

const CoverLetterDemo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <DemoContainer>
            <FloatingElement
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{
                    width: '150px',
                    height: '150px',
                    left: '5%',
                    top: '20%',
                }}
            />
            <FloatingElement
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, -8, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{
                    width: '100px',
                    height: '100px',
                    right: '10%',
                    bottom: '10%',
                }}
            />
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
                    Create a Cover Letter in Seconds
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
                    Let our AI craft a personalized cover letter based on your skills and the job description
                </Typography>

                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box sx={{ mb: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Description
                                        sx={{
                                            fontSize: '2rem',
                                            color: 'primary.main',
                                            mr: 2,
                                        }}
                                    />
                                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                                        How It Works
                                    </Typography>
                                </Box>
                                <Typography variant="body1" sx={{ color: '#666666', mb: 2, lineHeight: 1.8 }}>
                                    Our AI analyzes your resume and the job description to create a compelling cover letter that highlights your relevant experience and skills.
                                </Typography>
                            </Box>

                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Edit
                                        sx={{
                                            fontSize: '2rem',
                                            color: 'primary.main',
                                            mr: 2,
                                        }}
                                    />
                                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                                        Key Features
                                    </Typography>
                                </Box>
                                <Box component="ul" sx={{ color: '#666666', pl: 3 }}>
                                    <Typography component="li" sx={{ mb: 1 }}>
                                        Customized content based on job requirements
                                    </Typography>
                                    <Typography component="li" sx={{ mb: 1 }}>
                                        Professional tone and formatting
                                    </Typography>
                                    <Typography component="li" sx={{ mb: 1 }}>
                                        Highlights relevant achievements
                                    </Typography>
                                    <Typography component="li">
                                        Multiple style options
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <PreviewCard>
                                <Typography
                                    variant="body1"
                                    component="pre"
                                    sx={{
                                        whiteSpace: 'pre-wrap',
                                        fontFamily: '"Roboto", sans-serif',
                                        color: '#333333',
                                        lineHeight: 1.8,
                                    }}
                                >
                                    {sampleCoverLetter}
                                </Typography>
                            </PreviewCard>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </DemoContainer>
    );
};

export default CoverLetterDemo;