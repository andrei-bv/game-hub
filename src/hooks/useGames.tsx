import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre ? selectedGenre.id : null },
    },
    [selectedGenre?.id]
  );
};

export default useGames;
