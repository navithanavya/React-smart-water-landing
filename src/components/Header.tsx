import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import MenuIcon from '@mui/icons-material/Menu'; // Import hamburger icon
import '../styles/Header.css';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Debugging isMobile
  console.log("isMobile:", isMobile);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List>
        <ListItemButton component={Link} to="/" >
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/products">
          <ListItemText primary="Products" />
        </ListItemButton>
        <ListItemButton component={Link} to="/offers">
          <ListItemText primary="Offers" />
        </ListItemButton>
        <ListItemButton component={Link} to="/solutions">
          <ListItemText primary="Solutions" />
        </ListItemButton>
        <ListItemButton component={Link} to="/blog">
          <ListItemText primary="Blog" />
        </ListItemButton>
        <ListItemButton component={Link} to="/contact">
          <ListItemText primary="Contact Us" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Box className="logo-container" sx={{ marginLeft: '45px' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" className="icon-button">
            <CircleIcon className="circle-icon" />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" className="logo-text" sx={{ marginLeft: '20px' ,fontFamily: 'Krona One' }} >
          ADYANTA
          </Typography>
        </Box>

        {/* Hamburger Menu visible only on mobile */}
        {isMobile && (
          <IconButton color="inherit" onClick={() => toggleDrawer(true)} className="hamburger-menu">
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer for mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
          {drawerList}
        </Drawer>

        {/* Desktop view: Show navigation buttons */}
        {!isMobile && (
          <Box className="nav-buttons">
            <Button component={Link} to="/" className="nav-button">Home</Button>
            <Button component={Link} to="/products" className="nav-button">Products</Button>
            <Button component={Link} to="/offers" className="nav-button">Offers</Button>
            <Button component={Link} to="/solutions" className="nav-button">Solutions</Button>
            <Button component={Link} to="/blog" className="nav-button">Blog</Button>
            <Button component={Link} to="/contact" className="nav-button">Contact Us</Button>
          </Box>
        )}

        {/* Desktop view: Show sign-in button */}
        {!isMobile && (
          <Box>
            <Button variant="contained" className="sign-in-button" sx={{ marginRight: '60px' ,borderRadius:"50px"}}>
              Sign In
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
