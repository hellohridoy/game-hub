import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
const useGames = () => {
  interface Game {
    id: number;
    name: string;
  }

  interface FetchGamesResult {
    count: number;
    results: Game[];
  }
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResult>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return { games, error };
};

export default useGames;
