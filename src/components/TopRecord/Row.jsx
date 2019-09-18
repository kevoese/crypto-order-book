import React from 'react';

const Row = ({ name, data }) => {
  return (
    <ul className="head top-record-row">
      <li className={`type ${name}`}>{name}</li>
      <li>{data && Number(data[0]).toFixed(3) || 0.00}</li>
      <li>{data && Number(data[1]).toFixed(3) || 0.00}</li>
    </ul>
  )
}

export default Row
