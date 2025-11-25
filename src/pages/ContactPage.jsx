import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  Alert,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Rating,
} from '@mui/material';
import CustomButton from '../components/CustomButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

/**
 * Contact Page - Form with Material UI components
 * 
 * LEARNING POINTS:
 * 1. TextField - Input fields with labels, validation
 * 2. Select - Dropdown menus
 * 3. FormControl - Container for form elements
 * 4. Snackbar - Toast notifications
 * 5. Alert - Colored message boxes
 * 6. Rating - Star rating component
 * 7. Form validation and state management
 * 8. Error handling with helperText
 */

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    rating: 0,
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Snackbar state
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle rating change
  const handleRatingChange = (event, newValue) => {
    setFormData(prev => ({ ...prev, rating: newValue }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setOpenSnackbar(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        rating: 0,
      });
    }
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '80vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#2c3e50',
            mb: 2,
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          We'd love to hear from you! Fill out the form below.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Info Cards */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3,
                textAlign: 'center',
                bgcolor: '#e3f2fd',
              }}
            >
              <EmailIcon sx={{ fontSize: 48, color: '#1976d2', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Email Us
              </Typography>
              <Typography color="text.secondary">
                contact@materialui.com
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3,
                textAlign: 'center',
                bgcolor: '#f3e5f5',
              }}
            >
              <PhoneIcon sx={{ fontSize: 48, color: '#9c27b0', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Call Us
              </Typography>
              <Typography color="text.secondary">
                +1 (555) 123-4567
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3,
                textAlign: 'center',
                bgcolor: '#e8f5e9',
              }}
            >
              <LocationOnIcon sx={{ fontSize: 48, color: '#4caf50', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Visit Us
              </Typography>
              <Typography color="text.secondary">
                123 Main St, City, Country
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Contact Form */}
        <Paper
          elevation={4}
          sx={{
            mt: 6,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 3, color: '#2c3e50' }}
          >
            Send us a Message
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Name Field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#3498db',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#2980b9',
                      },
                    },
                  }}
                />
              </Grid>

              {/* Email Field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#3498db',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#2980b9',
                      },
                    },
                  }}
                />
              </Grid>

              {/* Subject Select */}
              <Grid item xs={12}>
                <FormControl 
                  fullWidth 
                  error={Boolean(errors.subject)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#3498db',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#2980b9',
                      },
                    },
                  }}
                >
                  <InputLabel>Subject</InputLabel>
                  <Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    label="Subject"
                  >
                    <MenuItem value="general">General Inquiry</MenuItem>
                    <MenuItem value="support">Technical Support</MenuItem>
                    <MenuItem value="feedback">Feedback</MenuItem>
                    <MenuItem value="business">Business Proposal</MenuItem>
                  </Select>
                  {errors.subject && (
                    <FormHelperText>{errors.subject}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              {/* Message Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                  multiline
                  rows={5}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#3498db',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#2980b9',
                      },
                    },
                  }}
                />
              </Grid>

              {/* Rating */}
              <Grid item xs={12}>
                <Box>
                  <Typography component="legend" gutterBottom>
                    Rate Your Experience (Optional)
                  </Typography>
                  <Rating
                    name="rating"
                    value={formData.rating}
                    onChange={handleRatingChange}
                    size="large"
                    sx={{
                      color: '#f39c12',
                    }}
                  />
                </Box>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <CustomButton
                  type="submit"
                  customColor="purple"
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Send Message
                </CustomButton>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Message sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
