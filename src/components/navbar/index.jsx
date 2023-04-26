import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <Link to={"/"}>AB Product Admin</Link>
        </div>

        <div className={styles.menus}>
          <Link to={"/dashboard"}>Dashboard</Link>
          <Link to={" "}>Reports</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/accounts"}>Accounts</Link>
          <Link to={""}>Settings</Link>
          <Link to={"/"}>Admin, Log out</Link>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
