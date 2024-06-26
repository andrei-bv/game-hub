import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre ? gameQuery.genre.id : null,
        parent_platforms: gameQuery.platform ? gameQuery.platform.id : null,
        ordering: gameQuery.order ?? null,
        search: gameQuery.searchInput ?? null,
      },
    },
    [gameQuery]
  );
};

export default useGames;
