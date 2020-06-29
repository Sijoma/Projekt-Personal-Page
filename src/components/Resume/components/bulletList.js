import React from 'react';

const BulletList = ({items, ulClass, liClass}) => (
    <ul className={ulClass}>
    {items.map((keyword,index) => (
      <li className={liClass} key={index}>{keyword}</li>
    ))}
  </ul>
)

export default BulletList