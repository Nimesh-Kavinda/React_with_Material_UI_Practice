import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import Faq from '../components/Faq';
import Map from '../components/Map';
import ContactCard from '../components/ContactCard';

const Help = () => {
  return (
    <Box>
      <Hero />
      <Faq />
      <Map />
      <ContactCard />
    </Box>
  );
};

export default Help;
