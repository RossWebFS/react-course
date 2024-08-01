import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./City.module.css";
import { formatDate } from "../../utils/formDate";
import { useCityContext } from "../../contexts/CityContext";
import { BackButton } from "../../features/BackButton/BackButton";
import { Spinner } from "../Spinner/Spinner";

export const City = () => {
  const { currentCity, fetchCityDetails, isLoading } = useCityContext();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchCityDetails(id);
  }, [id, fetchCityDetails]);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <h1>City {id}</h1>
      <p>
        Position: {lat}, {lng}
      </p>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
};
