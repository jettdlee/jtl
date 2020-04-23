import React from 'react';
import '../styles/Header.css';
import Avatar from '../assets/avatar.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="flex-column">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <img className="avatar-logo" src={Avatar} alt="" />
            <div className="headings">
              <h1 className='heading'>
                Hello, I'm Jet
              </h1>
            </div>
          </div>
          <div className='sub-header'>
            <p>Back-end Developer</p>
            <p>Ruby on Rails</p>
            <p>Machine Learning</p>
            <p>Ex-Accountant</p>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
