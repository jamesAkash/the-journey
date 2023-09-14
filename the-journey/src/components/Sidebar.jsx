import React from "react";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "../components/Logo";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by The Journey
        </p>
      </footer>
    </div>
  );
}
