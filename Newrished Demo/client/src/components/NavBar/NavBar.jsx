import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import logo from "../../assets/logo.png";
import { useAuthContext } from "../context/AuthContext.jsx";
import styles from "./NavBar.module.css";




const NavBar = () => {

  const { isAuthenticated, email } = useAuthContext();
  const name = email?.split('@')[0];

  return (
    <div className={styles.wrapper}>
      <ul className={styles.products}>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink)}
        >
          <li>About Us</li>
        </NavLink>
        <NavLink
          to="products"
          className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink)}
        >
          <li>Our Bars</li>
        </NavLink>
      </ul>

      <NavLink to="/">
        <img className={styles.logoimg} src={logo} alt="logo" />
      </NavLink>

      <ul className={styles.products}>
        {!isAuthenticated ? (
          <Fragment>
            <NavLink
              to={'login'}
              className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink)}
            >
              <li>Login</li>
            </NavLink>
            <NavLink
              to='register'
              className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink)}
            >
              <li>Register</li>
            </NavLink>
          </Fragment>
        ) : (
          <Fragment>
            <span className={styles.spanintro}>
              Hi <span className={styles.namespan}>{name}</span>, ready for your
            </span>
            <NavLink
              to="createbar"
              className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink)}
            >
              <li className={`${styles.name} ${styles.namespan}`}>Custommade Bars</li>
            </NavLink>

            <NavLink
              to='logout'
              className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink)}
            >
              <li>Logout</li>
            </NavLink>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

export default NavBar;