import Genres from "../data/Genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenre = () => {
  return { data: Genres, isLoading: false, error: null };
};

export default useGenre;
