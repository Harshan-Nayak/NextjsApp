import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.cen} >
     <h2>Todo</h2>
     </div>
        <Link href="/" className={styles.li}>
          <h2>Add</h2>
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
