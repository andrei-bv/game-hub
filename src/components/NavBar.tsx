import {
  ColorModeContext,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import theme from "../Theme";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
