import React from 'react';

class NavbarButtons extends React.Component {

  goToLink = (event, link) => {
    // event.preventDefault();
    // this.props.history.push(link);
  }

  render() {
    const { buttonText, buttonLink } = this.props; 

    return(
      <button className="navbar-list-item" onClick={this.goToLink(buttonLink)}>
        {buttonText}
      </button>
    )
  }
}

export default NavbarButtons;