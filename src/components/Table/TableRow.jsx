import React from 'react';

const TableRow = ({index, data}) => {
  return (
    <ul className="table-row table-row-data">
      <li >{index}</li>
      <li>{data[0]}</li>
      <li>{data[1]}</li>
    </ul>
  )
}

export default TableRow;
