import styles from "./GeoPage.module.css";
import { Sidebar } from "../../layouts/Sidebar/Sidebar";
import { Map } from "../../features/Map/Map";
import {User} from "../../features/User/User";

export const GeoPage = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};
