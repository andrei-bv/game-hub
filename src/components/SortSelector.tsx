import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

interface Order {}

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton>Order by: Revelance</MenuButton>
      <MenuList>
        <MenuItem key="metacritic" value="metacritic">
          Revelance
        </MenuItem>
        <MenuItem key="created" value="created">
          Date added
        </MenuItem>
        <MenuItem key="name" value="name">
          Name
        </MenuItem>
        <MenuItem key="released" value="released">
          Release date
        </MenuItem>
        <MenuItem key="rating" value="rating">
          Popularity
        </MenuItem>
        <MenuItem key="rating" value="rating">
          Average rating
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
