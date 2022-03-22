import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__logo logo">
          <img src={logo} alt="tMovies Logo" />
          <Link to="/">tMovies</Link>
        </div>

        <div className="footer__menus">
          <nav className="footer__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Term of Services</Link>
            <Link to="/">About Us</Link>
          </nav>
          <nav className="footer__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy Policy</Link>
          </nav>
          <nav className="footer__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
