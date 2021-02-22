import React from 'react';

import Contact from './contact';
import HeaderImage from './header-image';
import Profiles from './profiles';
import Summary from './summary';

const Header = ({ basics }) => {
  return(
   <header id="header" className="clear">

    <HeaderImage />
    <div className="middle">
        <h1 className="name">{basics.name}</h1>
        <h2 className="label">{basics.label}</h2>
    </div>
      <span className="location">
    		<span className="address">{basics.location.address}, </span>
    		<span className="postalCode">{basics.location.postalCode} </span>
    		<span className="city">{basics.location.city}, </span>
    		<span className="countryCode">{basics.location.region} </span>
    	</span>
      <br></br>
      <span>
        * 17.10.1991
      </span>

    <Contact basics={basics} />
    <Profiles profiles={basics.profiles||[]} />
    <Summary summary={basics.summary} />
  </header>
)};

export default Header;