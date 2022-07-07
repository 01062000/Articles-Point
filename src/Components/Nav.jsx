/** @format */

import * as React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Nav() {
  return (
    <>
      <div className="nav_bar" style={{ position: "sticky" }}>
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
          <NavLink to="/login" className="login_button">
            <h5>Login</h5>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
