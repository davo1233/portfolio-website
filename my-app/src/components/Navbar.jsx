import {  IconButton, useMediaQuery, Link, Box, Flex, StackDivider, Text, HStack, VStack, Container } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { BrowserRouter as Router, Link as RouteLink, Routes, Route } from "react-router-dom";

import React from "react";
import { Logo } from "./Logo";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import { FaInstagram,FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
    
    const NavLink = ( {to,text} ) => (
        <Link as = {RouteLink} to = {to}>
          <Text fontSize="xl">{text}</Text>
        </Link>
    );
    return (
        <Flex justify="space-between" align="center" py={4}>
            <Box>
               <Logo></Logo>
            </Box>
            <Box>
                <HStack spacing = {3} divider = {<StackDivider/>} ml={20}>             
                        <NavLink to="/" text="Home" ml={2} />
                        <NavLink to="/about" text="About Me" ml={2} /> 
                        <NavLink to="/contact" text="Contact" ml={2} />
                </HStack> 
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