import React from "react";
import styles from "./navbar.module.css";
import Links from "@/Components/navbar/Links/Links";
function Navbar(props) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.Logo}>Junaid's First FullStack</div>
      <div className={styles.links}>
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
