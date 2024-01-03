import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Project Mango
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/something">
          Something Else Eventually
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
