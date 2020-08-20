import { css } from '@emotion/core';
import React from 'react';

import { useTheme } from '../../Theming';
import Location from '../location';
import BulletList from './bulletList';

const DateBlock = ({ item }) => {
  const theme = useTheme()
  return (
    <div
      className="date"
      css={css`
        color: ${theme.colors.text};
      `}
    >
      <span className="startDate">
        {item.startDate || item.releaseDate || item.date}{' '}
      </span>
      {!item.releaseDate && !item.date && (
        <span className="endDate">- {item.endDate || 'Current'}</span>
      )}
    </div>
  )
}

const DescriptionBlock = ({ item }) => {
  return (
  <header className="clear">
    <div className="header-left">
      {item.name && <div className="title">{item.name}</div>}
      {item.title && <div className="title">{item.title}</div>}
      {item.awarder && <div className="awarder">{item.awarder}</div>}
      <div className="position">{item.position}</div>
      {item.studyType && <div className="studyType">{item.studyType}</div>}
      {item.area && <div className="area">{item.area}</div>}
      {(item.company ||
        item.organization ||
        item.institution ||
        item.publisher) && (
        <div className="company">
          {item.company ||
            item.organization ||
            item.institution ||
            item.publisher}
        </div>
      )}
    </div>
    <DateBlock item={item} />
  </header>
)};

const Website = ({ website, name }) => (
  <span className="website">
    <a target="_blank" rel="noreferrer" href={website}>
      {name || website}
    </a>
  </span>
)

const PortfolioSection = props => {
  const { heading = 'Work', id = 'work' } = props
  const [checked, setChecked] = React.useState(0)
  return (
    <section className="section">
      <header>
        <h2 className="section-title">
          {heading}
          {props.items.length > 1 && <span className="item-count"> ({props.items.length})</span>}
        </h2>
      </header>

      <section id={id}>
        {props.items.map((item, index) => (
          <section className={id + '-item'} key={item + index} onClick={() => setChecked(index)}>
            { (!item.studyType && props.items.length > 1)  && <input
              id={id + '-item-' + index}
              type="checkbox"
              className="toggle-item"
              checked={index === checked}
              onChange={() => setChecked(index)}
            />}
            <label htmlFor={id + '-item-' + index}></label>

            <DescriptionBlock item={item} />

            {item.website  && <Website website={item.website} />}

            {item.location && <Location location={item.location} />}

            {item.keywords && item.keywords.length && (
              <BulletList
                items={item.keywords}
                ulClass="keywords"
                liClass="bullet"
              />
            )}

            <div className="item" id={id + '-item'}>
              {item.summary && <div className="summary">{item.summary}</div>}
              {item.highlights && item.highlights.length && (
                <BulletList
                  items={item.highlights}
                  ulClass="highlights"
                  liClass="bullet"
                />
              )}
            </div>
          </section>
        ))}
      </section>
    </section>
  )
}

export default PortfolioSection
