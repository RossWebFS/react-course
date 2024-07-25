import { useEffect } from "react";

export const useKey = (key, action) => {
  useEffect(() => {
    const callback = (e) => {
        console.log(e.code)
      if (e.code.toLowerCase() === key.toLowerCase()) {
        console.log(key);
        action();
      }
    };

    document.addEventListener("keypress", callback);

    return function () {
      document.removeEventListener("keypress", callback);
    };
  }, [action, key]);
};
