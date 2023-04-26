import React from 'react'
import { 
    Flex,
    Icon,
    Text,
    useMediaQuery,
 } from '@chakra-ui/react'
// A component that creates the cards that you see on the front screen which displays the 
// different technologies that I am currently proficient in 
//accepts a background 'bg' icon and text parameters

function CodingCard({bg, icon, text }) {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");  
    return (
        <Flex 
            ml = {isNotSmallerScreen ?  4: 0} 
            mt = {isNotSmallerScreen ?  0: 4} 
            rounded ='xl' 
            direction ='column' 
            bg = {bg} 
            h = '30vh' 
            w='30vh' 
            justify='flex-end'
        >
            <Icon color = "white" as={icon} w = "16" h = "16" ml={2}></Icon>
            <Text color={'white'} p = '4' fontsize='20' fontWeight={'semibold'}>{text}</Text>
        </Flex>
    )
}

export default CodingCard