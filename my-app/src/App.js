import React from 'react';
import { ChakraProvider, VStack, theme, Grid, Box } from '@chakra-ui/react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateColumns="1fr" // Single column layout
        templateRows="auto 1fr" // First row auto-sized for Navbar, second row takes the rest of the space
        height="100vh" // Full height
      >
        {/* Navbar */}
        <Box>
          <Navbar />
        </Box>

        {/* Main Content */}
        <Box overflowY="auto" padding="4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
