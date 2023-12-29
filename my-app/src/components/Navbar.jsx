import {
    IconButton,
    useMediaQuery,
    Link,
    Box,
    Flex,
    StackDivider,
    Text,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuGroup,
    MenuItem
  } from "@chakra-ui/react";
  import ColorModeSwitcher from "./ColorModeSwitcher";
  import { BrowserRouter as Router, Link as RouteLink } from "react-router-dom";
  import React from "react";
  import { Logo } from "./Logo";
  import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
  
  const Navbar = (props) => {
    
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
              <Menu>
                {({ isOpen }) => (
                    <>
                    <MenuButton
                        isActive={isOpen}
                        as={Button}
                    >
                        {"Menu"}
                    </MenuButton>
                    <MenuList>
                        <MenuGroup>
                        <MenuItem as={RouteLink} to="/">
                            Home
                        </MenuItem>
                        <MenuItem as={RouteLink} to="/about">
                            About
                        </MenuItem>
                        <MenuItem as={RouteLink} to="/contact">
                            Contact
                        </MenuItem>
                        <MenuItem as={RouteLink} to="/projects">
                            Projects
                        </MenuItem>
                        </MenuGroup>
                    </MenuList>
                    </>
                )}
                </Menu>
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
  