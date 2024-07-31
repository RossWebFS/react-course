import styles from "./CityList.module.css";
import { Spinner } from "../../components/Spinner/Spinner";
import { CityItem } from "../../components/CityItem/CityItem";
import { Message } from "../../components/Message/Message";
import { useCityContext } from "../../contexts/CityContext";

export const CityList = () => {
  const { cities, isLoading } = useCityContext();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};
