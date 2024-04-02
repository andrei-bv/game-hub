import {
  ColorModeContext,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import theme from "../Theme";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  children: ReactNode;
}

const NavBar = ({ children }: Props) => {
  return (
    <HStack  padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      {children}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
