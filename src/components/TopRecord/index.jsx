import React from 'react';
import Row from './Row';
import './index.scss';

const TopCard = () => {
  return (
    <div className="top-record">
      <h1>HIGHEST USD AGAINST BTC RECORD</h1>
      <ul className="head header">
        <li></li>
        <li>USD</li>
        <li>BTC</li>
      </ul>
      <Row name="ask" />
      <Row name="bids" />
    </div>
  )
}

export default TopCard;
