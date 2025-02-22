import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#ffffff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.8rem 0',
});

const NavButton = styled(Button)({
  color: '#333333',
  margin: '0 0.5rem',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(33, 150, 243, 0.08)',
  },
});

const LogoText = styled(Typography)({
  color: '#333333',
  fontWeight: 600,
  fontSize: '1.5rem',
  background: 'linear-gradient(45deg, #2196F3, #1976D2)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 240,
    background: '#ffffff',
    padding: '1rem 0',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Features', href: '#' },
    { text: 'Templates', href: '#' },
    { text: 'Pricing', href: '#' },
  ];

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.text} onClick={handleDrawerToggle}>
          <ListItemText
            primary={item.text}
            sx={{
              '& .MuiTypography-root': {
                color: '#333333',
                fontWeight: 500,
              },
            }}
          />
        </ListItem>
      ))}
      <ListItem>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            color: '#fff',
            boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
            '&:hover': {
              boxShadow: '0 6px 16px rgba(33, 150, 243, 0.3)',
            },
          }}
        >
          Get Started
        </Button>
      </ListItem>
    </List>
  );

  return (
    <StyledAppBar position="fixed">
      <Container>
        <StyledToolbar>
          <LogoText variant="h6" component="div">
            AI Resume Maker
          </LogoText>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <NavButton key={item.text} href={item.href}>
                {item.text}
              </NavButton>
            ))}
            <NavButton
              variant="contained"
              color="primary"
              sx={{
                color: '#fff',
                boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
                '&:hover': {
                  boxShadow: '0 6px 16px rgba(33, 150, 243, 0.3)',
                },
              }}
            >
              Get Started
            </NavButton>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: '#333333' }}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </Container>
      <MobileDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </MobileDrawer>
    </StyledAppBar>
  );
};

export default Navbar;