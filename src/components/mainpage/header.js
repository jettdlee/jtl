import React from 'react';

function Header() {
  return (
    <div className="d-flex flex-row align-items-center justify-content-center">
      <img className="avatar-logo" src="/images/avatar.svg" alt="" />
      <div className="headings">
        <h1 className='heading'>
          Hello, I'm Jet
        </h1>
      </div>
    </div>
  )
}

export default Header;