import React from 'react';
import NavbarButtons from './partials/NavbarButtons';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar" id="main_navbar">
        <Link className="navbar-home-link" to="/">
          Jet-Tsyn Lee
        </Link>
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
