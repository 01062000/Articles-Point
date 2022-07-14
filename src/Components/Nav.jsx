/** @format */

import * as React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Nav() {
  function handleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    window.location.assign(`/`);
  }

  return (
    <>
      <div className="nav_bar">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}>
          <NavLink to="/" className="button">
            <h3>ArticlesPoint</h3>
          </NavLink>
        </motion.div>
        <div className="navLinks">
          <NavLink to="/articles/Trending" className="article_link">
            <motion.h5
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}>
              Trending Articles
            </motion.h5>
          </NavLink>

          {localStorage.getItem("username") ? (
            <h5 className="login_button" onClick={handleLogout}>
              Log out
            </h5>
          ) : (
            <NavLink to="/login" className="login_button">
              <h5>Login</h5>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
