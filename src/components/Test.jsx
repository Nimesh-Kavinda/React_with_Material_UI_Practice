import React from 'react';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const Test = () => {
  return (
    <div className="flex gap-2 items-center justify-around flex-warp">
      <Slider
        defaultValue={30}
        sx={{
          width: 300,
          color: 'primary.dark',
          '& .MuiSlider-thumb': {
            borderRadius: '4px',
          },
        }}
      />
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Rating
          name="half-rating-read"
          color="secondary.dark"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </Stack>
    </div>
  );
};

export default Test;
