import React from 'react';

const TableRow = ({index, data}) => {
  return (
    <ul className="table-row table-row-data">
      <li >{index}</li>
      <li>{Number(data[0]).toFixed(3)}</li>
      <li>{Number(data[1]).toFixed(3)}</li>
    </ul>
  )
}

export default TableRow;
