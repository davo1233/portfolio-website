import React from 'react'
import { Heading,
        Stack,
        Circle,
        useMediaQuery,
        Flex,
        Box,
        Text,
        Button,
        Icon,
        } from '@chakra-ui/react';   
import { DiPython, DiJavascript, DiJava } from 'react-icons/di';
import CodingCard from '../components/CodingCard';

const RESUME_URL = 'http://localhost:3000/resume.pdf';
/*
this is the homepage*/
function Home() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");  
    //the code here activates when the download resume button is clicked and downloads my resume file
    const downloadResume = (url) => {
        console.log('a')
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <Stack>
            <Circle position = "absolute" bg = "blue.100" opacity = "0.1" w = "200px" h="200px" alignSelf="flex-end">
            </Circle>
            <Flex direction = {isNotSmallerScreen ? "row" : "column"}
                spacing = "200px" p = {isNotSmallerScreen ? "32" : "0"}
                alignSelf = 'flex-start'>  
                {/* self introduction section and resume download section */}
                <Box mt = {isNotSmallerScreen ? "0" : 16} align="flex-start">
                    <Text fontSize = '7x1' fontWeight ="semibold">Hi, my name is</Text>
                    <Heading bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip='text'>
                    Spenser Tan.
                    </Heading>
                    <Text>A UNSW Graduate from the Computer Science faculty, with a wide range of knowledge 
                        in various programming languages and software development methodologies.  
                    </Text>
                    <Button mt = {5} colorScheme='blue' onClick = {()=>{downloadResume(RESUME_URL)}}>Download my Resume</Button>
                </Box>
            </Flex>
            {/* this section utilises the component CodingCard to display the proficiencies that I currently have */}
            <Box alignSelf = 'center' px = '32' >
                    <Flex direction = {isNotSmallerScreen ? "row" : "column"}>
                        <CodingCard bg = 'blue.400' icon = {DiPython} text = {'Python'} />
                        <CodingCard  bg = 'yellow.400' icon = {DiJavascript} text = {'Javascript'} />
                        <CodingCard   bg = 'red.400' icon = {DiJava} text = {'Java'}/>
                    </Flex>
                    
                </Box>
            
        </Stack>

    )
}

export default Home;