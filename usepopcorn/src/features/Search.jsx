import { useRef } from "react";
import { useKey } from "../hooks/useKey";

export const Search = ({ query, setQuery }) => {
  const searchInpRef = useRef(null);

  useKey("enter", () => {
    if (document.activeElement === searchInpRef.current) return;
    searchInpRef.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={searchInpRef}
    />
  );
};
