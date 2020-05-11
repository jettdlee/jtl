import React from 'react';
import NavbarButtons from './partials/NavbarButtons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar" id="main_navbar">
        <div className="navbar-main-links">
          <Link className="navbar-home-link" to="/">
            Jet-Tsyn Lee
          </Link>
          <a className="link-icon btn btn-outline-light" href="https://www.linkedin.com/in/jet-tsyn-lee/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="link-icon btn btn-outline-light" href="https://twitter.com/jettdlee" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
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
