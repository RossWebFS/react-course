import { useState, useEffect } from "react";

export const useLocalStorage = (initialState, key) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
