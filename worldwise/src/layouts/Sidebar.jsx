import styles from "./Sidebar.module.css";
import { Logo } from "../components/Logo";
import { AppNav } from "./AppNav";
import { Footer } from "./Footer";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <Footer />
    </div>
  );
};
