import React from 'react';
import '../styles/Header.css';
import Avataaars from '../assets/avataaars.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img className="avatar-logo" src={Avataaars} alt="" />
        <div className="headings">
          <h1 className='heading'>
            Hello, I'm Jet
          </h1>
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
