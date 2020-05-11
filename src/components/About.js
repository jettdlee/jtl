import React from 'react';
import Bio from './about/bio';
import Skills from './about/skills';
import Tools from './about/tools';
import SectionHeader from './partials/SectionHeader';

import '../styles/About.css';

class About extends React.Component {
  render() {
    return (
      <section className="" id="about">
        <div className="">
          <SectionHeader headerText="About" />
          <Bio />
          <Skills />
          <Tools />
        </div>
      </section>
    )
  }
}

export default About;
