import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Box, Text, Heading } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>About Me</Heading>
      <Text>
        Hello! I'm Spenser, a passionate software developer based in Sydney. I graduated from the University of New South Wales with a degree in Computer Science and have been on an exciting journey ever since.
      </Text>
      <Text>
        During my time at UNSW, I not only pursued my academic interests but also explored my passion for coding. When I'm not at my computer, you'll often find me exploring the beautiful outdoors on my bike. It's a great way for me to clear my mind and find inspiration for my next coding adventure.
      </Text>
      <Text>
        Throughout my university years, I had the privilege of working on a variety of software projects that challenged me and helped me grow as a developer. From building web applications to diving into the world of machine learning, I've had the opportunity to engage with diverse projects that have honed my skills.
      </Text>  
      <Text>
        My primary focus is on creating clean, efficient, and user-friendly software solutions. I'm proficient in a wide range of technologies, including React.js, which I absolutely love for its versatility and performance. I believe that technology can make the world a better place, and I'm excited to be a part of that transformation through my work.
      </Text> 
      <Text>
        This portfolio showcases some of the projects I've worked on, and I hope you find them as exciting as I did. Feel free to explore and get in touch if you'd like to collaborate on a project or just have a chat about software development. I'm always up for a new challenge!
      </Text>
    </Box>
  );
};

export default About;