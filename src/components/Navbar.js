import React from 'react';
import '../styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-list-item">About</li>
          <li className="navbar-list-item">Experience</li>
          <li className="navbar-list-item">Portfolio</li>
          <li className="navbar-list-item">Contact</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
