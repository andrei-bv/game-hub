import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  filter,
} from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

export interface SortOrder {
  orderType: string;
}

interface Props {
  onSelectedOrder: (order: string) => void;
  selectedOrder: string | null;
}

const SortSelector = ({ onSelectedOrder, selectedOrder }: Props) => {
  const sortOrder = [
    {
      value: "metacritic",
      label: "Revelance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: " Average rating",
    },
  ];

  const currentSortOrder = sortOrder.find(
    (order) => order.value === selectedOrder
  );
  return (
    <Menu>
      <MenuButton as={Button}>
        Order by:{currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectedOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
