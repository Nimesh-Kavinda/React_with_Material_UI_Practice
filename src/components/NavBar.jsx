import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * NavBar Component - Material UI Navigation Bar
 *
 * LEARNING POINTS:
 * 1. AppBar - Material UI component for top navigation
 * 2. sx prop - Used for inline styling with custom colors
 * 3. Custom color using sx={{ bgcolor: 'color' }}
 * 4. Spacing with gap, display: 'flex', etc.
 */

const NavBar = ({ onNavigate, currentPage }) => {
  return (
    <AppBar
      position="static"
      sx={{
        // Custom background color (you can change this!)
        bgcolor: '#2c3e50', // Dark blue-gray
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo/Brand */}

        <Typography
          className="flex items-center gap-2"
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: '#ecf0f1', // Light gray
            letterSpacing: '1px',
          }}
        >
          NK
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="w-12 h-12"
          />
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            onClick={() => onNavigate('home')}
            sx={{
              // Custom button styling
              color: currentPage === 'home' ? '#3498db' : '#ecf0f1', // Blue when active
              fontWeight: currentPage === 'home' ? 'bold' : 'normal',
              '&:hover': {
                bgcolor: 'rgba(52, 152, 219, 0.1)', // Light blue hover
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate('contact')}
            sx={{
              color: currentPage === 'contact' ? '#3498db' : '#ecf0f1',
              fontWeight: currentPage === 'contact' ? 'bold' : 'normal',
              '&:hover': {
                bgcolor: 'rgba(52, 152, 219, 0.1)',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate('help')}
            sx={{
              color: currentPage === 'help' ? '#3498db' : '#ecf0f1',
              fontWeight: currentPage === 'help' ? 'bold' : 'normal',
              '&:hover': {
                bgcolor: 'rgba(52, 152, 219, 0.1)',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Help
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
