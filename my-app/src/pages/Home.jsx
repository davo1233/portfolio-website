import React from 'react';
import {
  Heading,
  VStack,
  Circle,
  useMediaQuery,
  Flex,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { DiPython, DiJavascript, DiJava } from 'react-icons/di';
import CodingCard from '../components/CodingCard';

const RESUME_URL = window.location.href + '/resume.pdf';

const Home = (props) => {
  const isMobile = props.isMobile;

  const downloadResume = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <VStack align="center" justify="center" spacing="8">
      <Circle
        bg="blue.100"
        opacity="0.1"
        w="200px"
        h="200px"
        alignSelf="flex-end"
      ></Circle>
      <Flex
        direction={isMobile ? 'column' : 'row'}
        spacing="200px"
        p={isMobile ? '32' : '0'}
        alignSelf="flex-center"
      >
        <Box mt={isMobile ? '0' : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold" textAlign="center">
            Hi, my name is
          </Text>
          <Heading
            bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
            bgClip="text"
            textAlign="center"
          >
            Spenser Tan.
          </Heading>
          <Text textAlign="center">
            A UNSW Graduate from the Computer Science faculty, with a wide range of knowledge in
            various programming languages and software development methodologies.
          </Text>
		  <Box textAlign="center"> {/* Added this Box for centering the button */}
            <Button
              mt={5}
              colorScheme="blue"
              onClick={() => {
                downloadResume(RESUME_URL);
              }}
            >
              Download my Resume
            </Button>
          </Box>
        </Box>
      </Flex>
      <Box alignSelf="center" px = '32' >
        <Flex direction={isMobile ? 'column' : 'row'} spacing="4">
          <CodingCard bg="blue.400" icon={DiPython} text={'Python'} />
          <CodingCard bg="yellow.400" icon={DiJavascript} text={'Javascript'} />
          <CodingCard bg="red.400" icon={DiJava} text={'Java'} />
        </Flex>
      </Box>
    </VStack>
  );
};

export default Home;
