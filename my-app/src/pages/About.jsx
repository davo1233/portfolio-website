import React from 'react';
import { Box, Text, Heading, useStyleConfig } from '@chakra-ui/react';
import Card from '../styling/cardStyle'
import StravaWidget from '../strava/stravaWidget';

const About = () => {
  
const cardStyles = useStyleConfig("Card",Card);

  return (
    <Box p={4} sx={cardStyles} boxShadow='md' borderRadius= 'md' >
      <Heading as="h1" size="xl" mb={4} textAlign="center">About Me</Heading>
      <Text mb = {4}>
        Hello! I'm Spenser, a passionate software developer based in Sydney. I graduated from the University of New South Wales (UNSW) with a degree in Computer Science and have been on an exciting journey ever since.
      </Text>
      <Text mb = {4}>
      During my time at UNSW, I not only pursued my academic interests but also explored my passion for coding. When I'm not at my computer, you'll often find me exploring the beautiful outdoors on my bike. It's a great way for me to clear my mind and find inspiration for my next coding adventure.
      </Text>
      <Text mb = {4}>
        Throughout my university years, I had the privilege of working on a variety of software projects that challenged me and helped me grow as a developer. From building web applications to diving into the world of machine learning, I've had the opportunity to engage with diverse projects that have honed my skills.
      </Text>  
      <Text mb = {4}>
      My primary focus is on creating clean, efficient, and user-friendly software solutions. I'm proficient in a wide range of technologies, including React.js, which I absolutely love for its versatility and performance. I believe that technology can make the world a better place, and I'm excited to be a part of that transformation through my work.
      </Text> 
      <Text mb = {4}>
      This portfolio showcases some of the projects I've worked on, and I hope you find them as exciting as I did. Feel free to explore and get in touch if you'd like to collaborate on a project or just have a chat about software development. I'm always up for a new challenge!
      </Text>
      <StravaWidget></StravaWidget>
    </Box>
  );
};

export default About;