import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <Link to="/">
      <img
        src="/assets/images/logo.png"
        alt="WorldWise logo"
        className={styles.logo}
      />
    </Link>
  );
};
