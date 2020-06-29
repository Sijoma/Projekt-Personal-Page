import React from 'react';

import BulletList from './components/bulletList';
import spaceToDash from './helpers/spaceToDash';

const Skills = ({ skills }) => (
  <section className="section">
    <header>
      <h2 className='section-title'>Skills</h2>
    </header>
    <section id="skills">
    {skills.map((skill,index) => (
      <div className="item" key={skill+index}>
        <h3 className="name">
          {skill.name}
        </h3>
        <div className={"level " + spaceToDash(skill.level)}>
          {skill.levelDisplay && <em>{skill.levelDisplay}</em>}
          <div className="bar"></div>
        </div>
        {skill.keywords && skill.keywords.length && <BulletList 
          items={skill.keywords}
          ulClass="keywords"
        />}
      </div>
    ))} 
    </section>
  </section>
);

export default Skills;
