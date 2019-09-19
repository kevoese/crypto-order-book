import React from 'react';
import TableRow from './TableRow';
import './index.scss';
import loader from '../../images/loader.gif';
import {getCurrencyPairSymbols} from '../../utils';

const Table = ({name, dataObj, selectValue}) => {
  const rowList = dataObj
    ? dataObj.map ((element, index) => (
        <TableRow key={index} data={element} index={index} />
      ))
    : <div className="loader"><img src={loader} alt="loading.." /></div>;

  const exchangeType = getCurrencyPairSymbols(selectValue).split ('/');
  return (
    <div className="table">
      <h2>{name}</h2>
      <div className="card">
        <ul className="table-row head">
          <li />
          <li>{exchangeType && exchangeType[0]}</li>
          <li>{exchangeType && exchangeType[1]}</li>
        </ul>
        <div className="row-container">
          {rowList}
        </div>
      </div>
    </div>
  );
};

export default Table;
