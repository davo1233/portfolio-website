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
      <Flex  direction ='column'>
        <Tabs variant='soft-rounded' colorScheme='green' align = 'start' isFitted width = '100%'>
          <TabList>
            <Tab>Cycling</Tab>
            <Tab>Public Transport</Tab>
            <Tab>Travelling</Tab>
            <Tab>CREATE UNSW</Tab>
          </TabList>
          <TabPanels>
            <TabPanel flex = '2'>
              {/* This is the section about cycling */}
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
                This journey allowed me to connect with nature, meet fellow cycling enthusiasts, and challenge my own limits, contributing to my love for this invigorating and fulfilling activity.
              </Text>
            </TabPanel>
            {/* This is the section about public transport */}
            <TabPanel flex = '2'>
              <Text>
              I love public transport because I find public transportation a fascinating model on how to move people in cities on a massive scale. 
              Exploring the myriad of bus, train, and tram types not only satisfies my curiosity but also provides invaluable insights into how these modes of transit intricately shape our society. 
              Each vehicle, route, and network represents a unique piece in the intricate puzzle of urban mobility. Studying the dynamics of public transport allows me to grasp the complexities of city planning, 
              infrastructure development, and the interconnectedness of communities. Moreover, witnessing the evolution of these systems over time underscores their significant impact on the way people move, 
              fostering connectivity and influencing the fabric of our daily lives. Public transport, in all its diversity, serves as a powerful catalyst for societal development and reflects the ongoing narrative 
              of our shared journey through urban landscapes.
              </Text>

              <Text  mt = {4}>

                I have also been involved in the public transport industry as well, since I have worked as a bus driver. 
                Being a bus driver is an inherently rewarding job that goes beyond the simple act of navigating a large vehicle through city streets. One of the challenges is learning new routes through unfamiliar places.
                I have gotten lost before, which is not fun at all but you learn about these mistakes and move on! As a result, I can now navigate in this area while rarely using a GPS now and it has made me a stronger character as a result. 
                Also for me, the joy comes from the daily interactions with a diverse array of passengers. Witnessing the gratitude of passengers as they board and exit, 
                whether it's a smile, a friendly greeting, or a heartfelt "thank you," adds a sense of fulfillment to my day. I feel that this has allowed me to achieve a higher purpose in our society, 
                making sure people are able to get to the places on time.  Moreover, the responsibility of ensuring the safety and comfort of every passenger creates a deep sense of purpose. 
                I take pride in being a reliable and punctual part of someone's journey, whether it's their daily commute or a special trip. 
                The ever-changing scenery outside my window and the camaraderie among colleagues further enrich the experience. In essence, being a bus driver is about more than just driving; 
                it's about contributing to the community, fostering connections, and finding satisfaction in the small moments that make a big difference.
              </Text>
            </TabPanel>
            {/* This is the section about travelling */}
            <TabPanel flex = '2'>
              <Text>
                My passion for traveling is a lifelong affair ever since I was a kid when my parents first brought me to China! It has been something that has taken me to diverse landscapes and cultures, both within Australia and around the world. 
                Exploring every Australian state has been a personal quest, venturing into the heart of the Outback with awe-inspiring visits to Alice Springs and the unique underground town of Coober Pedy. 
                The vast and remote expanses, such as the scorching Kalbarri in Western Australia, offered a unique challenge and a chance to experience the raw beauty of the Australian wilderness.
              </Text>
              <Text mt={4}>
                Beyond the borders of Australia, my wanderlust has led me to countries across Europe and Asia, each leaving an indelible mark on my travelogue. The historic charm of European cities, 
                the breathtaking landscapes of the Swiss Alps, and the cultural richness of Asia have broadened my perspective and deepened my appreciation for the diversity our world offers.
              </Text>
              <Text mt={4}>
                Traversing these varied terrains has not only gifted me with unforgettable memories but has also fostered a deeper understanding of the interconnectedness of our global community. 
                Whether it's navigating bustling Asian markets, savouring European cuisines, or embracing the vastness of the Australian Outback, each journey has been a tapestry of experiences that have enriched my life 
                and fueled my love for exploration.
              </Text>
            </TabPanel >
            {/*  This is the section about CREATE  */}
            <TabPanel flex = '2'>
              <Text>
                During my tenure as the Sales Director at CREATE UNSW, I took on the exciting challenge of revolutionizing our inventory management and spearheading the development of a brand-new e-commerce platform. 
                Faced with the task of overhauling our existing systems, I opted for a ground-up approach, choosing OpenCart as the foundation for our innovative solution. This endeavor involved designing, implementing, and optimizing the platform to ensure seamless operations and enhanced user experiences.
              </Text>
              <Text mt={4}>
                One of the highlights of my role was the establishment and management of a weekly pop-up sales stall, a venture initiated entirely from scratch. From conceptualization to execution, 
                I navigated every stage of the process, from selecting merchandise to orchestrating the layout and driving sales strategies. This hands-on experience not only honed my leadership skills but also provided invaluable insights into effective management practices.
              </Text>
              <Text mt={4}>
                Navigating the complexities of inventory management and e-commerce development demanded a strategic mindset and proactive problem-solving. Overcoming these challenges not only streamlined 
                our operations but also positioned CREATE UNSW as a tech-savvy and forward-thinking organization.
              </Text> 
              <Text mt={4}>
                This multifaceted role allowed me to merge my passion for technology with my leadership prowess, fostering an environment of innovation and efficiency within the organization. 
                It was a journey that not only contributed to the growth of CREATE UNSW but also served as a testament to the rewarding nature of tackling challenges head-on in the realms of leadership and management.
              </Text>

            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </VStack>
    
  );
};

export default About;