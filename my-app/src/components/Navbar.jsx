import {  IconButton, useMediaQuery, Link, Box, Flex } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import React from "react";
import { FaInstagram,FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");
    return (
        <Flex justify="space-between" align="center" py={4}>
            <Box>
                <Link  to="/">
                    Home
                </Link>
                <Link  to="/about">
                    About
                </Link>
                <Link  to="/contact">
                    Contact
                </Link>
            </Box>
            <Box>
                <IconButton icon= {<FaInstagram/>} ml = {2} p ={2}></IconButton>
                <IconButton icon = {<FaLinkedin/>} ml = {2} p ={2}></IconButton>
                <IconButton icon = {<FaGithub/>} ml = {2} p ={2}></IconButton>
                <ColorModeSwitcher ml = {2} p ={2}></ColorModeSwitcher>
            </Box>
             
        </Flex>
           
        
    );
}

export default Navbar;