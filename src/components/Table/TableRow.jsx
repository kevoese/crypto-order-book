import React from 'react';
import { formatNumberString } from '../../utils';

const TableRow = ({index, data}) => {
  return (
    <ul className="table-row table-row-data">
      <li >{index}</li>
      <li>{formatNumberString(data[0])}</li>
      <li>{formatNumberString(data[1])}</li>
    </ul>
  )
}

export default TableRow;
