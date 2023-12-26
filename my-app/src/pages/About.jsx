import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Box, Text, Heading, VStack, Tab, Tabs, TabList, TabPanels, TabPanel, Image, Flex } from '@chakra-ui/react';

const About = () => {
  return (
    <VStack>
      <Box p={4}>
        <Heading as="h2" size="xl" mb={4} align ='center'>About Me</Heading>
        <Text>
          Hello! I'm Spenser, a passionate software developer based in Sydney. I graduated from the University of New South Wales with a degree in Computer Science and have been on an exciting journey ever since.
          During my time at UNSW, I not only pursued my academic interests but also explored my passion for coding. When I'm not at my computer, you'll often find me exploring the beautiful outdoors on my bike. 
          It's a great way for me to clear my mind and find inspiration for my next coding adventure.
          Throughout my university years, I had the privilege of working on a variety of software projects that challenged me and helped me grow as a developer. 
          From building web applications to diving into the world of machine learning, I've had the opportunity to engage with diverse projects that have honed my skills. 
          My primary focus is on creating clean, efficient, and user-friendly software solutions. I'm proficient in a wide range of technologies, including React.js, 
          which I absolutely love for its versatility and performance. I believe that technology can make the world a better place, and I'm excited to be a part of that transformation through my work.
           Feel free to explore some of my interests and get in touch if you'd like to collaborate on a project 
          or just have a chat about software development. I'm always up for a new challenge!
        </Text>
      </Box>
      <Flex  direction ='column' align = 'center'>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab>Cycling</Tab>
            <Tab>Public Transport</Tab>
            <Tab>Travelling</Tab>
            <Tab>CREATE UNSW</Tab>
          </TabList>
          <TabPanels>
            <TabPanel flex = '2'>
              <Image src="cycling-image.jpg" alt="Cycling" mb={4} /> 
              <Text>
                Cycling has always been more than just a hobby for me; it's a journey of exploration and self-discovery. One of my most memorable cycling adventures was the Sydney to Newcastle bike ride. 
                The scenic route took me through picturesque landscapes, charming towns, and coastal views. Pedaling through the undulating terrains, I felt a sense of accomplishment and freedom.
              </Text>
              <Text mt={4}>
                Along the way, I explored various places, each with its unique charm. Some notable stops included [List the places you visited during the ride]. 
                Whether it was a cozy café in a small town or a breathtaking lookout point, every stop added a new dimension to my cycling experience.
              </Text>
              <Text mt={4}>
                This journey allowed me to connect with nature, meet fellow cycling enthusiasts, and challenge my own limits. 
                I've also participated in other cycling events, each contributing to my love for this invigorating and fulfilling activity.
              </Text>
            </TabPanel>
            <TabPanel flex = '2'>
              <p>two!</p>
            </TabPanel>
            <TabPanel flex = '2'>
              <p>three!</p>
            </TabPanel >
            <TabPanel flex = '2'>
              <p>four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </VStack>
    
  );
};

export default About;