import React from 'react';
import '../styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar" id="main_navbar">
        <div className="">
          <ul className="navbar-ul horizontal flex-row">
            <li className="navbar-list-item">About</li>
            <li className="navbar-list-item">Experience</li>
            <li className="navbar-list-item">Portfolio</li>
            <li className="navbar-list-item">Contact</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
