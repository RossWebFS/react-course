import { useState, useEffect } from "react";

export const API_KEY = "6eee76ed";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          {
            signal: controller.signal,
          }
        );

        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movies are not found");
        setMovies(data.Search);
      } catch (error) {
        if (error.name !== "AbortError") setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return [movies, isLoading, error];
};
