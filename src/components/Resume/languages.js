import React from 'react';

const Languages = ({ languages }) => (
  <section className="section">
    <header>
      <h2 className="section-title">Languages</h2>
    </header>
    <section id="languages">
      {languages.map((language, index) => (
        <div className="display" key={language.language + index}>
          <h3 className="language">{language.language}</h3>
          <div className="item">
            <div className={'level fluency ' + language.fluency.toLowerCase()}>
              <em>{language.fluencyDisplay || language.fluency}</em>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  </section>
)

export default Languages
