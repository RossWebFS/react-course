import { Link } from "react-router-dom";

import styles from "./CityItem.module.css";
import { formatDate } from "../../utils/formDate";
import { useCityContext } from "../../contexts/CityContext";

export const CityItem = ({ city }) => {
  const { currentCity } = useCityContext();

  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className="styles.emoji">{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};
