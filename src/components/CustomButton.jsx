import React from 'react';
import { Button } from '@mui/material';

/**
 * CustomButton Component - Reusable styled button
 * 
 * LEARNING POINTS:
 * 1. Button variants: 'contained', 'outlined', 'text'
 * 2. Custom colors with sx prop
 * 3. Hover effects with '&:hover'
 * 4. Props spreading for flexibility
 * 5. Creating reusable components with custom defaults
 */

const CustomButton = ({ 
  children, 
  variant = 'contained', 
  color = 'primary',
  customColor,
  ...props 
}) => {
  // Define custom color schemes
  const colorSchemes = {
    purple: {
      bgcolor: '#9b59b6',
      '&:hover': { bgcolor: '#8e44ad' },
    },
    orange: {
      bgcolor: '#e67e22',
      '&:hover': { bgcolor: '#d35400' },
    },
    green: {
      bgcolor: '#27ae60',
      '&:hover': { bgcolor: '#229954' },
    },
    pink: {
      bgcolor: '#e91e63',
      '&:hover': { bgcolor: '#c2185b' },
    },
  };

  return (
    <Button
      variant={variant}
      color={color}
      sx={{
        // Apply custom color if provided
        ...(customColor && colorSchemes[customColor]),
        // Common styles for all buttons
        fontWeight: 'bold',
        px: 4,  // padding x-axis
        py: 1.5,  // padding y-axis
        borderRadius: 2,
        textTransform: 'none',  // Keep original case
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 10px rgba(0,0,0,0.15)',
          ...(customColor && colorSchemes[customColor]?.['&:hover']),
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
