/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Row from './Row';
import './index.scss';

const TopCard = ({ asks, bids, currencyPair}) => {
  const [topRecord, setTopRecord] = useState({askIndex: 0, bidIndex: 0})
  const getTopRecord = () => {
    let topRecordAsk = 0;
    let topRecordBid = 0;
    let askIndex;
    let bidIndex;
    asks.forEach((element, index) => {
      if(Number(element[0]) > topRecordAsk) {
        topRecordAsk = element[0];
        askIndex = index;
      }
      if(Number(bids[index][0]) > topRecordBid) {
        topRecordBid = bids[index][0];
        bidIndex = index;
      }
    });

    setTopRecord( state => ({
      ...state,
      askIndex,
      bidIndex
    }));
  }
  
  useEffect(() => {
    if(asks && bids) getTopRecord();
  }, [asks, bids]);
  
  return (
    <div className="top-record">
      <h1>{`HIGHEST ${currencyPair.split('/')[0]} AGAINST ${currencyPair.split('/')[1]} RECORD`}</h1>
      <ul className="head header">
        <li></li>
        <li>{currencyPair.split('/')[0]}</li>
        <li>{currencyPair.split('/')[1]}</li>
      </ul>
      <Row name="asks" data={asks && asks[topRecord.askIndex]} />
      <Row name="bids" data={bids && bids[topRecord.bidIndex]} />
    </div>
  )
}

export default TopCard;
