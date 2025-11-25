import React from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* SECTION TITLE */}
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
              mb: 2,
              color: 'primary.dark',
            }}
          >
            Find Us on the Map
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 5,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            We are located at a convenient and accessible location. Check the
            map below to find our office quickly.
          </Typography>
        </motion.div>

        {/* MAP CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card
            elevation={6}
            sx={{
              overflow: 'hidden',
              borderRadius: '18px',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0px 10px 26px rgba(0,0,0,0.18)',
              },
            }}
          >
            {/* GOOGLE MAP EMBED */}
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 450 },
              }}
            >
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.888333122443!2d80.02046927474525!3d7.290571414102501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f83b0c0b91e1%3A0xc3d13a491091696e!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000"
              ></iframe>
            </Box>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Map;
