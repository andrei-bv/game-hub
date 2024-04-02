import React from "react";
import useGenre from "../hooks/useGenre";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";
import useGames from "../hooks/useGames";
import GameGrid from "./GameGrid";

interface Props {
  onSeletedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSeletedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  return (
    <>
      {isLoading && <Spinner />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px" cursor="pointer">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSeletedGenre(genre)}
                fontWeight={genre.id == selectedGenre?.id ? "bold" : ""}
                fontSize="large"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
