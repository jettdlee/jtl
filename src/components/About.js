import React from 'react';
import Bio from './about/bio';
import Skills from './about/skills';
import Tools from './about/tools';
import '../styles/About.css';

class About extends React.Component {
  render() {
    return (
      <section className="" id="about">
        <div className="">
          <h2 className="">Who am I</h2>
          <Bio />
          <Skills />
          <Tools />
        </div>
      </section>
    )
  }
}

export default About;
