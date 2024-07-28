import { Sidebar } from "../layouts/Sidebar";
import { Map } from "../features/Map";
import styles from "./AppLayout.module.css";

export const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};
