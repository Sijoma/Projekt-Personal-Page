import React from 'react';

const Contact = ({ basics }) => (
  <div id="contact">
    <div className="website">
      <span className="fas fa-external-link-alt"></span> 
      <a target="_blank" rel="noreferrer" href={basics.website}>
        {" "+basics.website}
      </a>
    </div>
    <div className="email">
      <span className="far fa-envelope"></span>
      <a href={'mailto:' + basics.email}> {basics.email}</a>
    </div>
    <div className="phone">
      <span className="fas fa-mobile-alt"></span>
      <a href={'tel:' + basics.phone}> {basics.phone}</a>
    </div>
  </div>
)

export default Contact
