import React, { useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import "./header.scss";

import logo from "../../assets/tmovie.png";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shinkHeader);

    return () => {
      window.removeEventListener("scroll", shinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="tMovies Logo" />
          <Link to="/">tMovies</Link>
        </div>

        <ul className="header__nav">
          {headerNav.map((e, i) => {
            return (
              <li key={i} className={`${i === active ? "active" : ""}`}>
                <Link to={e.path}>{e.display}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
