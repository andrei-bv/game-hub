import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformIconList from "./components/PlatformIconList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector, { SortOrder } from "./components/SortSelector";
import SearchInput from "./components/SearchInput";
import HeadingText from "./components/HeadingText";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string | null;
  searchInput: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar>
          <SearchInput
            onSearchsubmit={(searchInput) =>
              setGameQuery({ ...gameQuery, searchInput })
            }
          />
        </NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            onSeletedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HeadingText gameQuery={gameQuery} />
        <HStack spacing={5}>
          <PlatformSelector
            onSelectedPlatfom={(platform) => {
              setGameQuery({ ...gameQuery, platform });
            }}
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectedOrder={(order) => {
              setGameQuery({ ...gameQuery, order });
            }}
            selectedOrder={gameQuery.order}
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
