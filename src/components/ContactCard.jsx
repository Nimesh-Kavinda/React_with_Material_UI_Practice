import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Stack,
  Button,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// IMAGE SLIDER (VERY LIGHTWEIGHT)
const images = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1080',
  'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1080',
  'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1080',
];

const ContactCard = () => {
  const [index, setIndex] = React.useState(0);

  // Auto slide every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              color: 'primary.dark',
              mb: 6,
            }}
          >
            Contact Us
          </Typography>
        </motion.div>

        {/* MAIN LAYOUT */}
        <Box
          sx={{
            display: 'flex',
            gap: 5,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* LEFT CARD – CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ flex: 1 }}
          >
            <Card
              elevation={6}
              sx={{
                p: 4,
                borderRadius: '20px',
                border: '1px solid',
                borderColor: 'primary.light',
                backgroundColor: 'background.paper',
                transition: 'transform .3s, box-shadow .3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 2, color: 'primary.dark' }}
              >
                Get in Touch
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    +94 71 234 5678
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    support@yourshop.com
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <PlaceIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    No 25, Main Street, Kandy, Sri Lanka.
                  </Typography>
                </Stack>
              </Stack>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: 4,
                  px: 4,
                  py: 1.2,
                  borderRadius: '10px',
                  fontWeight: 600,
                }}
              >
                Send Message
              </Button>
            </Card>
          </motion.div>

          {/* RIGHT — IMAGE SLIDER */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ flex: 1 }}
          >
            <Card
              elevation={6}
              sx={{
                height: { xs: 260, md: 420 },
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid',
                borderColor: 'primary.light',
              }}
            >
              <motion.img
                key={index}
                src={images[index]}
                alt="Shop slide"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                }}
                initial={{ opacity: 0.2, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </Card>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactCard;
