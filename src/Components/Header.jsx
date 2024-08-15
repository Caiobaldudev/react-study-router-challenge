import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="contato">
            Contato
          </NavLink>
        </li>
      </ul>
      <h1>Header</h1>
    </nav>
  );
};

export default Header;
