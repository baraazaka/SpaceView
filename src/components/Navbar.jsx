import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { FcMindMap } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={style.ContinerNav}>
      <div className={style.rowNav}>
        <div className={style.logoNav}>
          <p className={style.logoName}>
            <span className={style.spanNameNav}>S</span>pace
            <span className={style.spanNameNav}>V</span>iew
          </p>
          <FcMindMap />
        </div>

        <div className={style.contentNav}>
          <ul className={style.ulNav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeLink : style.linkNav
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeLink : style.linkNav
              }
              to="/explore"
            >
              Explore
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeLink : style.linkNav
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeLink : style.linkNav
              }
              to="/space"
            >
              Space
            </NavLink>
          </ul>
        </div>

        <GiHamburgerMenu
          className={style.menuIcon}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <div className={style.overlay} onClick={() => setIsOpen(false)}>
          <div
            className={style.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              to="/"
              className={style.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={style.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/about"
              className={style.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/space"
              className={style.mobileLink}
              onClick={() => setIsOpen(false)}
            >
             Space
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
