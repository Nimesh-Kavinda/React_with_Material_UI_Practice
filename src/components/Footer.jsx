import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

/**
 * Footer Component - Material UI Footer
 * 
 * LEARNING POINTS:
 * 1. Box - Most flexible container component in MUI
 * 2. Container - Centers content with max-width
 * 3. Stack - Arranges items in row/column with spacing
 * 4. IconButton - Buttons specifically for icons
 * 5. Using Material Icons (@mui/icons-material)
 */

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // Custom background with gradient
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 4,  // padding Y-axis (top & bottom)
        mt: 'auto',  // Push footer to bottom
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center">
          {/* Footer Title */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Learn Material UI
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton
              sx={{
                color: 'white',
                '&:hover': {
                  color: '#3498db',
                  transform: 'translateY(-5px)',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'white',
                '&:hover': {
                  color: '#1DA1F2',
                  transform: 'translateY(-5px)',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'white',
                '&:hover': {
                  color: '#0077B5',
                  transform: 'translateY(-5px)',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>

          {/* Copyright */}
          <Typography 
            variant="body2" 
            sx={{ 
              textAlign: 'center',
              opacity: 0.9,
            }}
          >
            © 2025 Material UI Learning Project. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
