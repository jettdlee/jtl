import React from 'react';
import AboutImages from '../partials/AboutImages';

function Skills() {
  return (
    <div id="skills">
      <div>
        <h3>Skills</h3>
        <div className="skill-img">
          <AboutImages imageId="rails" srcPath="/images/skills/rails.png" alt="" />
          <AboutImages imageId="ruby" srcPath="/images/skills/ruby.png" alt="" />
          <AboutImages imageId="python" srcPath="/images/skills/python.png" alt="" />
          <AboutImages imageId="javascript" srcPath="/images/skills/javascript.png" alt="" />
          <AboutImages imageId="html5" srcPath="/images/skills/html5.svg" alt="" />
          <AboutImages imageId="java" srcPath="/images/skills/java.png" alt="" />
          <AboutImages imageId="react" srcPath="/images/skills/react.png" alt="" />
          <AboutImages imageId="sql" srcPath="/images/skills/sql.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Skills;
