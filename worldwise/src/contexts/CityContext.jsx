/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:4000";

const CityContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "cities/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "cities/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        current: {},
      };
    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
};

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

const CityProvider = ({ children }) => {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchCities = async () => {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        dispatch({ type: "rejected", payload: error.message });
      }
    };

    fetchCities();
  }, []);

  const fetchCityDetails = async (id) => {
    if (+id === currentCity.id) return;

    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();

      dispatch({ type: "city/loaded", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  };

  const createCity = async (newCity) => {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
      const data = await res.json();

      dispatch({ type: "cities/created", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  };

  const deleteCity = async (id) => {
    try {
      dispatch({ type: "loading" });
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "cities/deleted", payload: id });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  };

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
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
