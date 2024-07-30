/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState, useEffect } from "react";

const BASE_URL = "http://localhost:4000";

const CityContext = createContext(null);

const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

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

  const fetchCityDetails = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();

      setCurrentCity(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const createCity = async (newCity) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
      const data = await res.json();

      setCities((cities) => [...cities, data]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCity = async (id) => {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        fetchCityDetails,
        createCity,
        deleteCity,
      }}
    >
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
