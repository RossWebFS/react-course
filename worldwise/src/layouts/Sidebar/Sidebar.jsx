import { Outlet } from "react-router-dom";

import styles from "./Sidebar.module.css";
import { Logo } from "../../components/Logo/Logo";
import { AppNav } from "../AppNav/AppNav";
import { Footer } from "../Footer/Footer";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
};
