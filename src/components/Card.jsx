import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const CardNew = () => {
  return (
    <Card
      sx={{ minWidth: 275, size: '300px', boxShadow: 4 }}
      className="w-12 items-center justify-center mx-auto my-8"
    >
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 14 }}>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ color: 'text.primary', mb: 2 }}>adjective</Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          color="warning"
          sx={{
            backgroundColor: 'primary.dark',
            '&:hover': { bgcolor: 'primary.main' },
            padding: '8px 16px',
            color: 'white',
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardNew;
