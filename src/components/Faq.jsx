import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  Typography,
  Card,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const faqItems = [
  {
    q: 'What services do you offer?',
    a: 'We offer a wide range of digital solutions including web development, UI/UX design, backend services, and cloud deployments.',
  },
  {
    q: 'How do I get support?',
    a: 'You can reach our support team anytime through the contact page or by sending us an email. We reply within 24 hours.',
  },
  {
    q: 'Do you offer custom development?',
    a: 'Yes! We specialize in custom solutions tailored exactly to your business needs with high performance and scalability.',
  },
  {
    q: 'How long does a project typically take?',
    a: 'Most projects take between 2 to 6 weeks depending on complexity and features.',
  },
];

const Faq = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              textAlign: 'center',
              mb: 3,
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              maxWidth: '400px',
              mx: 'auto',
              mb: 6,
              fontSize: '1.1rem',
            }}
          >
            Got questions? We’ve got answers! Explore our most asked questions
            below.
          </Typography>
        </motion.div>

        {/* FAQ LIST */}
        <Box>
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <Card
                elevation={4}
                sx={{
                  mb: 3,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'primary.light',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Accordion
                  disableGutters
                  sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon sx={{ color: 'primary.main' }} />
                    }
                    sx={{
                      px: 3,
                      py: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'primary.dark',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                      }}
                    >
                      {item.q}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{ px: 3, pb: 3, color: 'text.secondary' }}
                  >
                    {item.a}
                  </AccordionDetails>
                </Accordion>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;
