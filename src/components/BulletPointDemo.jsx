import { Box, Container, Typography, Paper, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Work, CheckCircle } from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const DemoCard = styled(Paper)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '2rem',
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

const BulletPoint = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: 'rgba(33, 150, 243, 0.05)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
        transform: 'translateX(8px)',
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
    },
});

const sampleData = [
    {
        id: 1,
        jobTitle: 'Senior Project Manager',
        bullets: [
            'Led cross-functional teams of 15+ members to deliver enterprise software projects with 100% on-time completion rate',
            'Implemented Agile methodologies resulting in 40% reduction in development cycle time',
            'Managed $2M+ project budgets while maintaining 95% client satisfaction rate',
        ],
    },
    {
        id: 2,
        jobTitle: 'Marketing Specialist',
        bullets: [
            'Developed and executed social media campaigns achieving 150% increase in engagement',
            'Created content strategy that generated 50K+ monthly website visitors',
            'Managed marketing budget of $500K with 25% ROI improvement',
        ],
    },
];

const BulletPointDemo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        pauseOnHover: true,
        customPaging: () => (
            <Box
                sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(33, 150, 243, 0.3)',
                    '&.slick-active': {
                        backgroundColor: '#2196F3',
                    },
                }}
            />
        ),
    };

    const renderJobCard = (job, index) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
        >
            <DemoCard>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Work
                        sx={{
                            fontSize: '2rem',
                            color: 'primary.main',
                            mr: 2,
                        }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {job.jobTitle}
                    </Typography>
                </Box>
                {job.bullets.map((bullet, bulletIndex) => (
                    <motion.div
                        key={bulletIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 3 + bulletIndex) * 0.1 }}
                    >
                        <BulletPoint>
                            <CheckCircle
                                sx={{
                                    color: 'primary.main',
                                    mt: 0.5,
                                }}
                                aria-label="Check"
                            />
                            <Typography variant="body1">{bullet}</Typography>
                        </BulletPoint>
                    </motion.div>
                ))}
            </DemoCard>
        </motion.div>
    );

    return (
        <DemoContainer>
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
                    Generate Strong Bullet Points
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
                    Transform your work experience into powerful, ATS-friendly bullet points
                </Typography>
                {isMobile ? (
                    <Box sx={{ '.slick-dots': { bottom: '-40px' } }}>
                        <Slider {...settings}>
                            {sampleData.map((job, index) => (
                                <Box key={job.id} sx={{ px: 1 }}>
                                    {renderJobCard(job, index)}
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                ) : (
                    <Grid container spacing={4}>
                        {sampleData.map((job, index) => (
                            <Grid item xs={12} md={6} key={job.id}>
                                {renderJobCard(job, index)}
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </DemoContainer>
    );
};

export default BulletPointDemo;