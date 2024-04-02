import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const HeadingText = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default HeadingText;
