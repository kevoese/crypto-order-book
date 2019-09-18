import React from 'react';

const Row = ({ name }) => {
  return (
    <ul className="head top-record-row">
      <li className={`type ${name}`}>{name}</li>
      <li>1234.89</li>
      <li>0.0098</li>
    </ul>
  )
}

export default Row
