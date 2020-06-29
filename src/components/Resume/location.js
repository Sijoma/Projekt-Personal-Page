import React from 'react';

const Location = ({location}) => (
    <React.Fragment>
        <span className="location">
            <span className="fas fa-map-marker-alt"></span>
            <span className="city">City:{location.city},</span>
            <span className="countryCode">({location.countryCode})</span>
            <span className="region">{location.region}</span>
        </span>
    </React.Fragment>
)

export default Location;