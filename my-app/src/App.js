import React from 'react';
import {
  	ChakraProvider,
  	VStack,
  	theme,
  	Flex,
	Heading,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
		<Navbar/>
		<VStack>
			<Flex w = '100%'>
				<Heading>
					Welcome to my portfolio.
				</Heading>
			</Flex>
		</VStack>
		
    </ChakraProvider> 
  );
}

export default App;
