import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
  let badgeColor = "green";
  if (criticScore < 80) {
    badgeColor = "yellow";
  }
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      colorScheme={badgeColor}
    >
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
