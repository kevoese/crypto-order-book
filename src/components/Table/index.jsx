import React from 'react';
import TableRow from './TableRow';
import './index.scss';

const Table = ({ name, exchangType = ['USD', 'BTC'], loading = false }) => {
  const dataObj = [[1234, 89], [1234, 898], [1234, 894], [1234, 89], [1234, 898], [1234, 894], [1234, 89], [1234, 898], [1234, 894]];
  const rowList = loading ? <p>Loading...</p> : dataObj.map((element, index) => <TableRow key={index} data={element} index={index} />);
  return (
    <div className="table">
      <h2>{name}</h2>
      <div className="card">
      <ul className="table-row head">
        <li></li>
        <li>{exchangType[0]}</li>
        <li>{exchangType[1]}</li>
      </ul>
      <div className="row-container">
      {rowList}
      </div>
      </div>
    </div>
  )
}

export default Table;
