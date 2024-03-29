import React from 'react';
import {  VStack,  Grid, Box } from '@chakra-ui/react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import FeaturedProjects from './pages/FeaturedProjects';
import { Routes, Route } from 'react-router-dom';
import { useBreakpointValue } from "@chakra-ui/react";

function App() {
  const isMobile = useBreakpointValue({ base: true, md: false }, { ssr: false });  
  return (
    
      <Grid
        templateColumns="1fr" // Single column layout
        templateRows="auto 1fr" // First row auto-sized for Navbar, second row takes the rest of the space
        height="100vh" // Full height
      >
        {/* Navbar */}
        <Box>
          <Navbar isMobile = {isMobile} />
        </Box>

        {/* Main Content */}
        <Box overflowY="auto" padding="4">
          <Routes>
            <Route exact path="/" element={<Home isMobile = {isMobile}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<FeaturedProjects />} />
          </Routes>
        </Box>
      </Grid>
  );
}

export default App;
