import React from 'react';
import {
  ChakraProvider,
  VStack,
  theme,
  Flex,
  Heading,
  Container,
  Stack,
  Box,

} from '@chakra-ui/react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      
      <Stack>

        <Flex w="100%" direction = "column" h = "100%">
			
            <BrowserRouter>

			<Box w = "100%">
				<Navbar />
			</Box>

			<Box flex = "1">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/contact" element={<Contact />} />
				</Routes>
			</Box>
			

             
            </BrowserRouter>

        </Flex>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
