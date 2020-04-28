import React from 'react';
import { Link } from 'react-router-dom';
class NavbarButtons extends React.Component {


  render() {
    const { buttonText, buttonLink } = this.props; 

    return(
      <Link className="navbar-list-item" to={buttonLink}>
        {buttonText}
      </Link>
    )
  }
}

export default NavbarButtons;