import {
    IconButton,
    useMediaQuery,
    Link,
    Box,
    Flex,
    StackDivider,
    Text,
    HStack,
    VStack,
    Button,
    Collapse,
  } from "@chakra-ui/react";
  import ColorModeSwitcher from "./ColorModeSwitcher";
  import { BrowserRouter as Router, Link as RouteLink } from "react-router-dom";
  import { useBreakpointValue } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { Logo } from "./Logo";
  import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
  
  const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const NavLink = ({ to, text }) => (
      <Link as={RouteLink} to={to}>
        <Text fontSize="xl">{text}</Text>
      </Link>
    );
  
    return (
      <Flex justify="space-between" align="center" py={4}>
        <Box>
          <Logo />
        </Box>
        <Flex align="center">
          {props.isMobile ? (
            <Box color="white" position="relative">
              <Button onClick={toggleMenu}>Menu</Button>
  
              <Collapse in={isOpen} animateOpacity>
                <VStack
                  align="start"
                  spacing={2}
                  mt={2}
                  position="absolute"
                  top="100%"
                  left="0"
                  zIndex="1000"
                >
                  <NavLink to="/" text="Home" />
                  <NavLink to="/about" text="About" />
                  <NavLink to="/contact" text="Contact" />
                  <NavLink to="/projects" text="Projects" />
                </VStack>
              </Collapse>
            </Box>
          ) : (
            <HStack spacing={3} divider={<StackDivider />} ml={20}>
              <NavLink to="/" text="Home" />
              <NavLink to="/about" text="About Me" />
              <NavLink to="/contact" text="Contact" />
              <NavLink to="/projects" text="Projects" />
            </HStack>
          )}
  
          <Box ml={props.isMobile ? 0 : 2}>
            <Link href="https://www.instagram.com/tenserspan/" isExternal>
              <IconButton icon={<FaInstagram />} ml={2} p={2} />
            </Link>
            <Link href="https://www.linkedin.com/in/spenser-tan-25372b169/" isExternal>
              <IconButton icon={<FaLinkedin />} ml={2} p={2} />
            </Link>
            <Link href="https://github.com/davo1233" isExternal>
              <IconButton icon={<FaGithub />} ml={2} p={2} />
            </Link>
            <ColorModeSwitcher ml={2} p={2} />
          </Box>
        </Flex>
      </Flex>
    );
  };
  
  export default Navbar;
  