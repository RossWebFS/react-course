import { Outlet } from "react-router-dom";

import styles from "./Sidebar.module.css";
import { Logo } from "../components/Logo";
import { AppNav } from "../layouts/AppNav";
import { Footer } from "../layouts/Footer";

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
