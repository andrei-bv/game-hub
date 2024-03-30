import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { CanceledError } from "axios";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = () => {
  return useData<Game>("/games");
};

export default useGames;
