import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Chip,
  Stack,
  Paper,
  Divider,
  Card,
} from '@mui/material';
import CustomButton from '../components/CustomButton';
import Test from '../components/Test';
import CardNew from '../components/Card';
import CustomCard from '../components/CustomCard';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PaletteIcon from '@mui/icons-material/Palette';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';

/**
 * Landing Page - Home page with Material UI components
 *
 * LEARNING POINTS:
 * 1. Container - Centers content with responsive width
 * 2. Grid - Responsive layout system (like CSS Grid)
 * 3. Typography - Text components with variants
 * 4. Chip - Small labeled elements
 * 5. Paper - Container with elevation/shadow
 * 6. Divider - Horizontal/vertical lines
 * 7. Icons from @mui/icons-material
 * 8. Spacing system: theme spacing multiplier (1 = 8px)
 */

const LandingPage = ({ onNavigate }) => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            Welcome to Material UI
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.95,
              lineHeight: 1.6,
            }}
          >
            Learn how to build beautiful, responsive React applications with
            Material UI components
          </Typography>

          {/* Chips for tags */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            <Chip
              label="React"
              sx={{
                bgcolor: '#61dafb',
                color: 'white',
                fontWeight: 'bold',
              }}
            />
            <Chip
              label="Material UI"
              sx={{
                bgcolor: '#0081cb',
                color: 'white',
                fontWeight: 'bold',
              }}
            />
            <Chip
              label="Responsive"
              sx={{
                bgcolor: '#4caf50',
                color: 'white',
                fontWeight: 'bold',
              }}
            />
          </Stack>

          {/* Call-to-action buttons */}
          <Stack direction="row" spacing={3} justifyContent="center">
            <CustomButton
              customColor="orange"
              onClick={() => onNavigate('contact')}
            >
              Get Started
            </CustomButton>
            <CustomButton
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Learn More
            </CustomButton>
          </Stack>
        </Container>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#2c3e50',
            mb: 6,
          }}
        >
          Why Material UI?
        </Typography>

        {/* Feature Cards Grid */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <CustomCard
              title="Fast Development"
              description="Pre-built components speed up your development process significantly."
              icon={<SpeedIcon sx={{ fontSize: 48 }} />}
              cardColor="#e3f2fd"
              actions={
                <CustomButton size="small" customColor="purple">
                  Explore
                </CustomButton>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomCard
              title="Beautiful Design"
              description="Google's Material Design principles for stunning UI/UX."
              icon={<PaletteIcon sx={{ fontSize: 48 }} />}
              cardColor="#f3e5f5"
              actions={
                <CustomButton size="small" customColor="pink">
                  View Demo
                </CustomButton>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomCard
              title="Easy to Customize"
              description="Customize colors, styles, and themes with simple props."
              icon={<CodeIcon sx={{ fontSize: 48 }} />}
              cardColor="#fff3e0"
              actions={
                <CustomButton size="small" customColor="orange">
                  Customize
                </CustomButton>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomCard
              title="Production Ready"
              description="Battle-tested components used by thousands of companies."
              icon={<RocketLaunchIcon sx={{ fontSize: 48 }} />}
              cardColor="#e8f5e9"
              actions={
                <CustomButton size="small" customColor="green">
                  Deploy
                </CustomButton>
              }
            />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 6 }} />
      <Test />
      <CardNew />

      {/* Stats Section */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper
          elevation={4}
          sx={{
            p: 6,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 4 }}
          >
            Join Thousands of Developers
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                2M+
              </Typography>
              <Typography variant="h6">Weekly Downloads</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                85K+
              </Typography>
              <Typography variant="h6">GitHub Stars</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                100+
              </Typography>
              <Typography variant="h6">Components</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default LandingPage;
