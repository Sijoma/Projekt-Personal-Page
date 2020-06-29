import React from 'react';

import spaceToDash from '../helpers/spaceToDash';

const Profiles = ({ profiles }) => (
  <div id="profiles">
  {profiles.map((profile,index) => (
      <div className="item" key={profile+index}>
        <div className="username">
          <span className={"fab fa-" + spaceToDash(profile.network) + " " + spaceToDash(profile.network) + " social"}></span>
          <span className="url">
            <a target="_blank"
              href={profile.url}> {profile.username}</a>
          </span>
        </div>
      </div>
    ))}
    </div>);

export default Profiles;
