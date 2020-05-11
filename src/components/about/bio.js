import React from 'react';
import '../../styles/bio.css';

function Bio() {
  return (
    <div id="bio">
      <img className="avatar-img" src="/images/avatar.svg" alt="" />
      <div className="about-summary">
        <p>
          Hello, I'm Jet Lee (yes that is real). Back-end developer based in Liverpool, UK.
          I currently work in Yozu, as a Ruby on Rails developer.
          I previously had worked in Finance for several international businesses.
      </p>
      </div>
    </div>
  )
}

export default Bio;