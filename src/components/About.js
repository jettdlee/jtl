import React from 'react';
import '../styles/About.css';

class About extends React.Component {
  render() {
    return (
      <section className="" id="about">
        <div className="">
          <h2 className="">Who am I</h2>
          <div id="bio" className="row">
            <div className="col-lg-4 ml-auto">
              <p className="lead">
                Hello, I'm Jet Lee (yes that is real). Back-end developer based in Liverpool, UK.
                I currently work in Yozu, as a Ruby on Rails developer.
                I previously had worked in Finance for several international businesses.
              </p>
            </div>
          </div>
          <div id="skills" className="row">
            <div className="mr-auto">
              <h3>Languages</h3>
              <div>
                <img id="rails" src="/images/rails.png" alt="" />
                <img id="ruby" src="/images/ruby.png" alt="" />
                <img id="python" src="/images/python.png" alt="" />
                <img id="javascript" src="/images/javascript.png" alt="" />
                <img id="html5" src="/images/html5.svg" alt="" />
                <img id="java" src="/images/java.png" alt="" />
                <img id="react" src="/images/react.png" alt="" />
              </div>
            </div>
          </div>
          <div id="tools" className="row">
            <div>
              <h3>Tools</h3>
              <div>
                <img id="git" src="/images/git.png" alt="" />
                <img id="vim" src="/images/vim.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
