/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState, useEffect } from "react";

const BASE_URL = "http://localhost:4000";

const CityContext = createContext(null);

const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <CityContext.Provider value={{ cities, isLoading }}>
      {children}
    </CityContext.Provider>
  );
};

const useCityContext = () => {
  const context = useContext(CityContext);
  if (context === null)
    throw new Error("CityContext was used outside the CityProvider");
  return context;
};

export { CityProvider, useCityContext };
