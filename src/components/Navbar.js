import React from 'react';
import NavbarButtons from './partials/NavbarButtons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar" id="main_navbar">
        <Link className="navbar-home-link" to="/">
          Jet-Tsyn Lee
        </Link>
        <a className="btn btn-outline-light btn-social mx-1" href="#">
          <i className="fab fa-fw fa-twitter"></i>
        </a>
        <a className="btn btn-outline-light btn-social mx-1" href="#">
          <i className="fab fa-fw fa-linkedin-in"></i>
        </a>
        <div className="navbar-ul horizontal flex-row">
          <NavbarButtons buttonText="About" buttonLink="/about" />
          <NavbarButtons buttonText="Experience" buttonLink="/experience" />
          <NavbarButtons buttonText="Portfolio" buttonLink="/portfolio" />
          <NavbarButtons buttonText="Contact" buttonLink="/contact" />
        </div>
      </nav>
    )
  }
}

export default Navbar;
