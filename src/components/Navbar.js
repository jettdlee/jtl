import React from 'react';
import NavbarButtons from './partials/NavbarButtons';
import '../styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar" id="main_navbar">
        <div className="navbar-ul horizontal flex-row">
          <NavbarButtons buttonText="About" buttonLink="/about" history={this.props.history}/>
          <NavbarButtons buttonText="Experience" buttonLink="/experience" />
          <NavbarButtons buttonText="Portfolio" buttonLink="/portfolio" />
          <NavbarButtons buttonText="Contact" buttonLink="/contact" />
        </div>
      </nav>
    )
  }
}

export default Navbar;
