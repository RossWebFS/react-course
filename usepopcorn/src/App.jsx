import { useState } from "react";

import { NumResults } from "./components/NumResults";
import { Search } from "./features/Search";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { NavBar } from "./layouts/NavBar";
import { Main } from "./layouts/Main";
import { Box } from "./layouts/Box";
import { WatchedSummary } from "./features/WatchedSummary";
import { MovieDetails } from "./features/MovieDetails";
import { WatchedMovieList } from "./features/WatchedMovieList";
import { MovieList } from "./features/MovieList";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [movies, isLoading, error] = useMovies(query);
  const [watched, setWatched] = useLocalStorage([], "watched");

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
