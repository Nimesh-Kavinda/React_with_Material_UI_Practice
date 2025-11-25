import { useState } from 'react';
import { Box } from '@mui/material';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './context/theme';

// Import components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Import pages
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import HelpPage from './pages/Help';

/**
 * Main App Component
 *
 * LEARNING POINTS:
 * 1. Simple page navigation using state (no router needed for learning)
 * 2. Box component for layout container
 * 3. Passing props to child components
 * 4. Conditional rendering based on state
 */

function App() {
  // State to track current page
  const [currentPage, setCurrentPage] = useState('home');

  // Function to handle navigation
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {/* Navigation Bar */}
        <NavBar onNavigate={handleNavigate} currentPage={currentPage} />

        {/* Page Content */}
        <Box sx={{ flexGrow: 1 }}>
          {currentPage === 'home' && (
            <LandingPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'contact' && <ContactPage />}
          {currentPage === 'help' && <HelpPage />}
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
