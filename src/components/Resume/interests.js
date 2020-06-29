import React from 'react';

import BulletList from './components/bulletList';

const Interests = ({ interests }) => (
  <section className="section">
    <header>
      <h2 className='section-title'>Interests</h2>
    </header>
    <section id="interests">
     {interests.map((interest, index) => (
      <div className="item" key={interest.name + index}>
        <h3 className="name">
          {interest.name}
        </h3>

        <BulletList 
          items={interest.keywords}
          ulClass="keywords" />
        <div className="summary">{interest.summary}</div>
      </div>
      ))}
    </section>
  </section>
  );

export default Interests;
