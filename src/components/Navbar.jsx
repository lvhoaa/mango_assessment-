import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    // <div className={styles.container}>
    //   <Link className={styles.logo} href="/">
    //     Project Mango
    //   </Link>
    //   <div className={styles.links}>
    //     <Link className={styles.link} href="/">
    //       Home
    //     </Link>
    //     <Link className={styles.link} href="/something">
    //       Something Else Eventually
    //     </Link>
    //   </div>
    // </div>
    // <div className="container ml-1">
    //   <Link href="/" className="logo position-relative">Project Mango</Link>
    //   <div>
    //     <Link href="/" className="" >Home</Link>
    //     <Link href="/something" className="">Something Else Eventually</Link>
    //   </div>
    // </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light ml-1 mb-4" style={{marginLeft:"20px"}}>
      <Link className="navbar-brand mb-0 h1 ml-4" style={{fontWeight:"bold"}} href="/">
        Project Mango
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item navbar-text">
            <Link className="nav-link active" aria-current="page" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item navbar-text">
            <Link className="nav-link active" href="/something">
              Something Else Eventually
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
