import React from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';

/**
 * CustomCard Component - Reusable styled card
 * 
 * LEARNING POINTS:
 * 1. Card - Container for content
 * 2. CardContent - Main content area
 * 3. CardActions - Area for buttons/actions
 * 4. Elevation prop - Controls shadow depth (0-24)
 * 5. Custom border and hover effects
 */

const CustomCard = ({ 
  title, 
  description, 
  icon, 
  actions, 
  cardColor = '#ffffff',
  elevation = 3 
}) => {
  return (
    <Card
      elevation={elevation}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        border: '2px solid transparent',
        transition: 'all 0.3s ease',
        bgcolor: cardColor,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
          borderColor: '#3498db',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
        {/* Icon */}
        {icon && (
          <div style={{ 
            fontSize: '48px', 
            marginBottom: '16px',
            color: '#3498db',
          }}>
            {icon}
          </div>
        )}

        {/* Title */}
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#2c3e50',
            mb: 2,
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Actions (buttons) */}
      {actions && (
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          {actions}
        </CardActions>
      )}
    </Card>
  );
};

export default CustomCard;
