import React from 'react';
import { formatNumberString } from '../../utils';

const Row = ({ name, data }) => {
  return (
    <ul className="head top-record-row">
      <li className={`type ${name}`}>{name}</li>
      <li>{data ? formatNumberString(data[0]) : '0.000'}</li>
      <li>{data ? formatNumberString(data[1]) : '0.000'}</li>
    </ul>
  )
}

export default Row
