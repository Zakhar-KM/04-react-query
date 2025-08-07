import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN as string;

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const config = {
    params: { query },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const response = await axios.get<FetchMoviesResponse>(BASE_URL, config);
  return response.data.results;
}
