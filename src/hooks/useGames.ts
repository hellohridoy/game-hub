import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
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
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResult>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) =>{ 
        if(err instanceof CanceledError) return;
        setError(err.message));
    return controller.abort;
  }, []);
  return { games, error };
};

export default useGames;
