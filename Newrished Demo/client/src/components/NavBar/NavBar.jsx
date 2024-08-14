import { NavLink } from "react-router-dom";
import { Fragment } from "react";

import { useAuthContext } from "../context/AuthContext.jsx";

import styles from "./NavBar.module.css"
import logo from "../../assets/logo.png"



const NavBar = () => {

  const { isAuthenticated, email } = useAuthContext()
  const name = email?.split('@')[0]

  return (
    <div className={styles.wrapper}>
      <ul className={styles.products}>
        <NavLink to="about">
          <li>About Us</li>
        </NavLink>
        <NavLink to="products">
          <li>Our Bars</li>
        </NavLink>
      </ul>

      <NavLink to="/">
        <img className={styles.logoimg} src={logo} alt="logo" />
      </NavLink>

      <ul className={styles.products}>
        {!isAuthenticated
          ?
          <Fragment>
            <NavLink to={'login'} >
              <li>Login</li>
            </NavLink>
            <NavLink to='register'>
              <li>Register</li>
            </NavLink>
          </Fragment>
          :
          <Fragment>
            <span className={styles.spanintro}>Hi<span className={styles.namespan}>{name}</span>, ready for your</span>
            <NavLink to="createbar" >
              <li className={styles.name}>Custommade Bars</li>
            </NavLink>

            <NavLink to='logout'>
              <li>Logout</li>
            </NavLink>
          </Fragment>
        }

      </ul>

    </div>
  );
};

export default NavBar;


