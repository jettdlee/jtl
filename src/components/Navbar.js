import React from 'react';
import NavbarButtons from './partials/NavbarButtons';
import '../styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar" id="main_navbar">
        <div className="navbar-ul horizontal flex-row">
          <NavbarButtons buttonText="Jet-Tsyn Lee" buttonLink="/" />
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
