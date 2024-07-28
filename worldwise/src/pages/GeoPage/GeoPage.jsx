import styles from "./GeoPage.module.css";
import { Sidebar } from "../../layouts/Sidebar/Sidebar";
import { Map } from "../../features/Map/Map";

export const GeoPage = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};
