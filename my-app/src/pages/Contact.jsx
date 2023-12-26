import React from 'react'
import { Box, Text, Heading, useMediaQuery, Flex, VStack } from '@chakra-ui/react';
import ContactForm from '../components/ContactForm';

/*
contact page which lists my contact information and the contact form
*/
const Contact = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px"); 
    return (
        <Flex align='center' justify = 'center'>
            <VStack>
            <Box mt = {isNotSmallerScreen ? "3" : 16} align="center">
                <Heading >Contact Information</Heading>
                <Text mt={4}>Email: spenser.tan01@gmail.com</Text>
                <Text mt={2}>Phone: (+61) 435009167</Text>
            </Box>
           <Box p = {5} mt = {100}>
                <Text>Please send me a message if you are interested in hiring me.</Text>
            </Box>
            <Box>
                <ContactForm/>
            </Box>
           </VStack>
            
        </Flex>
        
    )
}

export default Contact;