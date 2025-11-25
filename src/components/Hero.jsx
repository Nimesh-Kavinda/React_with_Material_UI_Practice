import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Card,
  CardMedia,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
        }}
      >
        {/* LEFT TEXT CONTENT */}
        <Stack spacing={3} sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              color: 'primary.dark',
              lineHeight: 1.2,
            }}
          >
            Welcome to Our Platform
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: 'text.secondary',
              maxWidth: '550px',
            }}
          >
            Explore modern solutions designed to make your workflow faster,
            easier, and more intuitive. Let’s build something amazing together.
          </Typography>

          {/* CTA Buttons */}
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5, borderRadius: '10px', fontWeight: 600 }}
              endIcon={<ArrowForwardIcon />}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ px: 4, py: 1.5, borderRadius: '10px', fontWeight: 600 }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>

        {/* RIGHT IMAGE */}
        <Card
          elevation={5}
          sx={{
            width: { xs: '100%', md: '450px' },
            borderRadius: '20px',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <CardMedia
            component="img"
            alt="Hero Illustration"
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&w=1080"
            sx={{
              height: { xs: 260, md: 420 },
              objectFit: 'cover',
            }}
          />
        </Card>
      </Container>
    </Box>
  );
};

export default Hero;
